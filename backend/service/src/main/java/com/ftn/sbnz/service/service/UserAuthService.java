package com.ftn.sbnz.service.service;

import com.ftn.sbnz.model.model.UserAuth;
import com.ftn.sbnz.service.repository.UserAuthRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserAuthService {
    private final UserAuthRepository userAuthRepository;

    public UserAuth save(UserAuth userAuth){
        return userAuthRepository.save(userAuth);
    }
}
