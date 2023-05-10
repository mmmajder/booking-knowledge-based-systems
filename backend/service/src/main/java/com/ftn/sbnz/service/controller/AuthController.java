package com.ftn.sbnz.service.controller;

import com.ftn.sbnz.model.model.User;
import com.ftn.sbnz.service.dto.*;
import com.ftn.sbnz.service.service.AuthentificationService;
import com.ftn.sbnz.service.service.UserService;
import com.ftn.sbnz.service.utils.DTOMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {
    private final AuthentificationService authentificationService;
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> createAuthenticationToken(
            @Valid @RequestBody JwtAuthenticationRequest authenticationRequest) {

        LoginResponseDTO loginResponseDTO = authentificationService.login(authenticationRequest);
        if (loginResponseDTO == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(loginResponseDTO);
    }

//    @PostMapping("/logout/{token}")
//    public void logout(@PathVariable String token) {
//        authentificationService.logoutUser(token);
//    }

    @PostMapping("/register")
    public void addCustomer(@Valid @RequestBody CreateUserDTO userDTO) throws MessagingException {
        authentificationService.addCustomer(userDTO);
    }

//    @PostMapping("/registerDriver")
//    public ResponseEntity<String> registerDriver(@Valid @RequestBody CreateDriverDTO userDTO) {
//        Driver driver = authentificationService.addDriver(userDTO);
//        if (driver == null) {
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @GetMapping("/verify/{code}")
    public ResponseEntity<UserVerificationResponseDTO> verifyUser(@PathVariable String code) {
        User user = authentificationService.verify(code);
        UserVerificationResponseDTO dto = DTOMapper.getUserVerificationResponseDTO(user);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping("/reset-password/{email}")
    public ResponseEntity<Boolean> resetPassword(@PathVariable String email) throws MessagingException {
        if (authentificationService.resetPassword(email)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

    @PutMapping("/set-password/{token}")
    public ResponseEntity<Boolean> setPassword(@PathVariable String token, @Valid @RequestBody  SetPasswordDTO setPasswordDTO) {
        if (authentificationService.setPassword(token, setPasswordDTO)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

    @GetMapping("/currently-logged-user")
    public ResponseEntity<UserResponse> loggedUser(Authentication authentication) {
        User user = userService.getLoggedUser(authentication);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        UserResponse dto = DTOMapper.getUserResponse(user);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
}
