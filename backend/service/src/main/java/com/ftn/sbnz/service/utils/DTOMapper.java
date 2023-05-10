package com.ftn.sbnz.service.utils;

import com.ftn.sbnz.model.model.User;
import com.ftn.sbnz.service.dto.UserEditDTO;
import com.ftn.sbnz.service.dto.UserResponse;
import com.ftn.sbnz.service.dto.UserVerificationResponseDTO;

public class DTOMapper {
    public static UserVerificationResponseDTO getUserVerificationResponseDTO(User user) {
        UserVerificationResponseDTO userVerificationResponseDTO = new UserVerificationResponseDTO();
        userVerificationResponseDTO.setCity(user.getCity());
        userVerificationResponseDTO.setPassword(user.getPassword());
        userVerificationResponseDTO.setEmail(user.getEmail());
        userVerificationResponseDTO.setSurname(user.getSurname());
        userVerificationResponseDTO.setPhoneNumber(user.getPhoneNumber());
        userVerificationResponseDTO.setName(user.getName());
        return userVerificationResponseDTO;
    }
    public static UserEditDTO getUserEditDTO(User user) {
        UserEditDTO userEditDTO = new UserEditDTO();
        userEditDTO.setCity(user.getCity());
        userEditDTO.setName(user.getName());
        userEditDTO.setSurname(user.getSurname());
        userEditDTO.setPhoneNumber(user.getPhoneNumber());
        return userEditDTO;
    }

    public static UserResponse getUserResponse(User user) {
        UserResponse userResponse = new UserResponse();
        userResponse.setCity(user.getCity());
        userResponse.setEmail(user.getEmail());
        userResponse.setName(user.getName());
        userResponse.setRole(user.getRole());
        userResponse.setSurname(user.getSurname());
        userResponse.setPhoneNumber(user.getPhoneNumber());
        userResponse.setBlocked(user.getBlocked());
        return userResponse;
    }
}
