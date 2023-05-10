package com.ftn.sbnz.service.repository;

import com.ftn.sbnz.model.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
