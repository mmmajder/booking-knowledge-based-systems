package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.DiscountForMultipleFlightTickets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountForMultipleFlightTicketsRepository extends JpaRepository<DiscountForMultipleFlightTickets, Long> {
}
