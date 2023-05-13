package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

}
