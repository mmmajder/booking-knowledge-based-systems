package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.Role;
import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.model.models.UserAuth;
import com.ftn.sbnz.backward.model.models.enums.UserRole;
import com.ftn.sbnz.backward.service.dto.*;
import com.ftn.sbnz.backward.service.exception.BadRequestException;
import com.ftn.sbnz.backward.service.exception.PasswordsDoNotMatchException;
import com.ftn.sbnz.backward.service.utils.TokenUtils;
import lombok.AllArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AuthentificationService {
    @Autowired
    private UserService userService;
    @Autowired
    private TokenUtils tokenUtils;
    @Autowired
    private UserAuthService userAuthService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private EmailService emailService;

    public void addCustomer(CreateUserDTO createUserDTO) throws MessagingException {
        if (!createUserDTO.getPassword().equals(createUserDTO.getPasswordConfirmation())) {
            throw new PasswordsDoNotMatchException("Passwords do not match");
        }
        if (userService.findByEmail(createUserDTO.getEmail()) != null)
            throw new BadRequestException("User with this email already exist");
        Customer customer = userService.createCustomer(createUserDTO);
        emailService.sendRegistrationAsync(customer);
    }

    public LoginResponseDTO login(JwtAuthenticationRequest authenticationRequest) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (AuthenticationException e) {
            return null;
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = (User) authentication.getPrincipal();
//        if (user.getRole().equals(UserRole.DRIVER)) {
//            driverService.loginDriver(user.getEmail());
//        }
        if (!isUserEnabled(user)) return null;
        return createAccessToken(user);
    }

    private LoginResponseDTO saveAuthInContext(User user) {
//        var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        var authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), "");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenUtils.generateToken(userService.findByEmail((String) authentication.getPrincipal()));
        long expiresIn = tokenUtils.getExpiredIn();
        return new LoginResponseDTO(new UserTokenState(token, expiresIn), user.getRole());
    }

    private LoginResponseDTO createAccessToken(User user) {
        String jwt = tokenUtils.generateToken(user);
        long expiresIn = tokenUtils.getExpiredIn();
        return new LoginResponseDTO(new UserTokenState(jwt, expiresIn), user.getRole());
    }

    private boolean isUserEnabled(User user) {
        return user.isEnabled() && !user.getDeleted();
    }

    public boolean changePassword(String email, ChangePasswordDTO changePasswordDTO) {
        User user = userService.findByEmail(email);

        if (!validatePasswordChange(user, changePasswordDTO))
            return false;

        saveNewPassword(user, changePasswordDTO.getNewPassword());
        return true;
    }

    public boolean setPassword(String token, SetPasswordDTO setPasswordDTO) {
        User user = userService.findByResetPasswordCode(token);
        if (user == null) return false;
        if (!setPasswordDTO.getNewPassword().equals(setPasswordDTO.getReEnteredNewPassword())) return false;
        saveNewPassword(user, setPasswordDTO.getNewPassword());
        return true;
    }

    private void saveNewPassword(User user, String setPasswordDTO) {
        user.setPassword(passwordEncoder.encode(setPasswordDTO));
        user.getUserAuth().setLastPasswordSet(new Timestamp(System.currentTimeMillis()));
        user.getUserAuth().setResetPasswordCode(null);
        userAuthService.save(user.getUserAuth());
        userService.save(user);
    }

    private boolean validatePasswordChange(User user, ChangePasswordDTO changePasswordDTO) {
        if (user == null)
            return false;

        if (!changePasswordDTO.getNewPassword().equals(changePasswordDTO.getReEnteredNewPassword()))
            return false;

        return passwordEncoder.matches(changePasswordDTO.getCurrentPassword(), user.getPassword());
    }

    public User verify(String verificationCode) {
        User user = userService.findByVerificationCode(verificationCode);
        if (user == null) throw new BadRequestException("Wrong verification code!");
        user.getUserAuth().setVerificationCode(null);
        user.getUserAuth().setIsEnabled(true);
        userAuthService.save(user.getUserAuth());
        user = userService.save(user);
        return user;
    }

    public boolean resetPassword(String email) throws MessagingException {
        User user = userService.findByEmail(email);
        if (user == null) {
            return false;
        }

        String randomCode = RandomString.make(64);
        user.getUserAuth().setResetPasswordCode(randomCode);
        userAuthService.save(user.getUserAuth());
        userService.save(user);
        emailService.sendEmailResetAsync(user);
        return true;
    }

    private UserAuth getUserAuth(User user) {
        UserAuth userAuth = new UserAuth();
        String randomCode = RandomString.make(64);
        userAuth.setVerificationCode(randomCode);
        userAuth.setLastPasswordSet(new Timestamp(System.currentTimeMillis()));
        userAuth.setRoles(getRoles(user));
        userAuth.setIsEnabled(setIsUserEnabledRegistration(user));
        userAuthService.save(userAuth);
        return userAuth;
    }

    private List<Role> getRoles(User user) {
        List<Role> roles = new ArrayList<>();
        UserRole userRole = user.getRole();
        roles.add(userService.findRolesByUserType("ROLE_USER"));

        if (userRole == UserRole.ADMIN) {
            roles.add(userService.findRolesByUserType("ROLE_ADMIN"));
        } else if (userRole == UserRole.DRIVER) {
            roles.add(userService.findRolesByUserType("ROLE_DRIVER"));
        } else {
            roles.add(userService.findRolesByUserType("ROLE_CUSTOMER"));
        }
        return roles;
    }

    private boolean setIsUserEnabledRegistration(User user) {
        return user.getRole() != UserRole.CUSTOMER;
    }
}
