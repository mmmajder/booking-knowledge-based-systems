package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.PlaneSeat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaneSeatRepository extends JpaRepository<PlaneSeat, Long> {
}
