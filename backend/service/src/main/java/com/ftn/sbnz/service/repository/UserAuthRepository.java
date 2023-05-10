package com.ftn.sbnz.service.repository;

import com.ftn.sbnz.model.model.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth, Long> {
}
