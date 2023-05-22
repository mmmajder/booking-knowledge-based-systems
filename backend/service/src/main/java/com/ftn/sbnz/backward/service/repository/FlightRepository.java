package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
}
