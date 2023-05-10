package com.ftn.sbnz.service.controller;

import com.ftn.sbnz.service.dto.FullnameDTO;
import com.ftn.sbnz.service.dto.UserEditDTO;
import com.ftn.sbnz.service.dto.UserResponse;
import com.ftn.sbnz.service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    private final UserService userService;

    @GetMapping("/")
    public UserResponse getUser(@RequestParam("email") String email) {
        return userService.getUser(email);
    }

    @GetMapping("/fullname/{email}")
    public ResponseEntity<FullnameDTO> getUserFullname(@PathVariable("email") String email) {
        FullnameDTO fullnameDTO =  userService.getUserFullname(email);

        return new ResponseEntity<>(fullnameDTO, HttpStatus.OK);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserEditDTO> updateProfile(@RequestParam("email") String email, @RequestBody UserEditDTO userEditDTO) {
        userEditDTO = userService.editUser(email, userEditDTO);
        if (userEditDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userEditDTO, HttpStatus.OK);
    }

    @PostMapping("/block")
    public boolean blockUser(@RequestParam("email") String email) {
        return userService.blockUser(email, true);
    }

    @PostMapping("/unblock")
    public boolean unblockUser(@RequestParam("email") String email) {
        return userService.blockUser(email, false);
    }

}
