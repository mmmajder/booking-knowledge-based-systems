package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.service.repository.UserRepository;
import com.ftn.sbnz.backward.model.models.enums.UserRole;
import com.ftn.sbnz.backward.model.models.Role;
import com.ftn.sbnz.backward.service.dto.FullnameDTO;
import com.ftn.sbnz.backward.service.dto.UserEditDTO;
import com.ftn.sbnz.backward.service.dto.UserResponse;
import com.ftn.sbnz.backward.service.repository.RoleRepository;
import com.ftn.sbnz.backward.service.repository.UserRepository;
import com.ftn.sbnz.backward.service.utils.DTOMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    public UserService() {
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        }
        return user.get();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public Role findRolesByUserType(String name) {
        return roleRepository.findByName(name);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public UserEditDTO editUser(String emailOfUserToEdit, UserEditDTO userEditRequest) {
        Optional<User> user = userRepository.findByEmail(emailOfUserToEdit);
        if (user.isEmpty()) {
            return null;
        }
        setNewUserProperties(user.get(), userEditRequest);
        return DTOMapper.getUserEditDTO(user.get());
    }

    private void setNewUserProperties(User user, UserEditDTO userEditRequest) {
        if (user.getRole() == UserRole.CUSTOMER || user.getRole() == UserRole.ADMIN) {
            updateUser(user, userEditRequest);
        }
    }

    public void updateUser(User user, UserEditDTO userEditRequest) {
        user.setName(Optional.ofNullable(userEditRequest.getName()).orElse(user.getName()));
        user.setSurname(Optional.ofNullable(userEditRequest.getSurname()).orElse(user.getSurname()));
        user.setCity(Optional.ofNullable(userEditRequest.getCity()).orElse(user.getCity()));
        user.setPhoneNumber(Optional.ofNullable(userEditRequest.getPhoneNumber()).orElse(user.getPhoneNumber()));
        save(user);
    }

    public User findByVerificationCode(String verificationCode) {
        return userRepository.findByVerificationCode(verificationCode).orElse(null);
    }

    public User getLoggedUser(Authentication authentication) {
        if (authentication == null) {
            return null;
        }
        return findByEmail(authentication.getName());
    }

    public UserResponse getUser(String email) {
        User user = findByEmail(email);
        if (user != null) {
            return DTOMapper.getUserResponse(user);
        }
        return null;
    }

    public boolean userExist(String email) {
        return findByEmail(email) != null;
    }

    public FullnameDTO getUserFullname(String email) {
        User u = findByEmail(email);
        return u != null ? new FullnameDTO(u.getName(), u.getSurname()) : null;
    }

    public boolean blockUser(String email, boolean block) {
        User user = findByEmail(email);
        user.setBlocked(block);
        userRepository.save(user);
        return block;
    }

    public User findByResetPasswordCode(String token) {
        return userRepository.findByResetPasswordCode(token);
    }
}
