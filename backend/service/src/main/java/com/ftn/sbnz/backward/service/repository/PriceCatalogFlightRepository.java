package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.PriceCatalogFlight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceCatalogFlightRepository extends JpaRepository<PriceCatalogFlight, Long> {
}
