package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.PlaneBusyness;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaneBusynessRepository extends JpaRepository<PlaneBusyness, Long> {
}
