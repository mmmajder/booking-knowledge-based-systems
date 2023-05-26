package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.hotel.RoomOccupancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomOccupancyRepository extends JpaRepository<RoomOccupancy, Long> {
}