package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.hotel.HotelOccupancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelOccupancyRepository extends JpaRepository<HotelOccupancy, Long> {
    HotelOccupancy findByHotelRoom_Id(Long hotelRoomId);
}