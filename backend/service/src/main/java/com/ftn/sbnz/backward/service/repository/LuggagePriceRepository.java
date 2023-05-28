package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.flight.LuggagePrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LuggagePriceRepository extends JpaRepository<LuggagePrice, Long> {
}
