package com.ftn.sbnz.backward.service.repository;

import com.ftn.sbnz.backward.model.models.hotel.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}