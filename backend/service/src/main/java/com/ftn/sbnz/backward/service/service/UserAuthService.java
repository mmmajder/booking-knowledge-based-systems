package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.UserAuth;
import com.ftn.sbnz.backward.service.repository.UserAuthRepository;
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
