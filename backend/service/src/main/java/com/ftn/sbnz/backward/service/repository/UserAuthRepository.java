package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth, Long> {
}
