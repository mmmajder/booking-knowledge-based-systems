package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.model.models.flight.LoyaltyProgram;
import com.ftn.sbnz.backward.service.dto.NumberOfTokensRequest;
import com.ftn.sbnz.backward.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/customer")
public class CustomerController {

    @Autowired
    private UserService userService;

    @GetMapping("/tokens")
    public double getNumberOfTokens(Authentication authentication) {
        User user = userService.getLoggedUser(authentication);
        return ((Customer) user).getNumberOfTokens();
    }

    @PutMapping("/tokens")
    public void addTokens(@RequestBody NumberOfTokensRequest tokens, Authentication authentication) {
        User user = userService.getLoggedUser(authentication);
        userService.addTokens(tokens.getNumberOfTokens(), (Customer) user);
    }

    @GetMapping("/get-loyalty-program")
    public LoyaltyProgram getLoyaltyProgramDiscount(Authentication authentication) {
        return userService.getLoyaltyProgramDiscount(authentication);
    }

}
