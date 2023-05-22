package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
    Airport findByCode(String code);
}
