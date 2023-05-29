package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.Plane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaneRepository extends JpaRepository<Plane, Long> {
}
