package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.hotel.HotelRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRoomRepository extends JpaRepository<HotelRoom, Long> {
}