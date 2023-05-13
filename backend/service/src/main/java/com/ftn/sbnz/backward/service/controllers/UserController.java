package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.service.dto.FullnameDTO;
import com.ftn.sbnz.backward.service.dto.UserEditDTO;
import com.ftn.sbnz.backward.service.dto.UserResponse;
import com.ftn.sbnz.backward.service.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;

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
