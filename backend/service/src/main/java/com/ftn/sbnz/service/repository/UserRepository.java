package com.ftn.sbnz.service.repository;

import com.ftn.sbnz.model.model.User;
import com.ftn.sbnz.model.enums.AuthProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String username);

    @Query(value = "SELECT user FROM User user WHERE user.userAuth.verificationCode = :code")
    Optional<User> findByVerificationCode(String code);

    @Modifying
    @Query("UPDATE User u SET u.provider = ?2 WHERE u.email = ?1")
    void updateAuthenticationProvider(String email, AuthProvider authProvider);

    @Query(value = "SELECT user FROM User user WHERE user.userAuth.resetPasswordCode = :code")
    User findByResetPasswordCode(String code);
}
