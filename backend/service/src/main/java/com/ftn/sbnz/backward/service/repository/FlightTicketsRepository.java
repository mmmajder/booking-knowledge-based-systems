package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.FlightTickets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightTicketsRepository extends JpaRepository<FlightTickets, Long> {
}
