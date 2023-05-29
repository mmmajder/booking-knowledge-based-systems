package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.LoyaltyProgram;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoyaltyProgramRepository extends JpaRepository<LoyaltyProgram, Long> {
}
