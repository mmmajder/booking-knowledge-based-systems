package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.model.models.hotel.Review;
import com.ftn.sbnz.backward.service.repository.ReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final HotelsService hotelsService;
    private final UserService customerService;

    public void createRideReview(CreateReviewDTO createReviewDTO) {
        Hotel hotel = hotelsService.findById(createReviewDTO.getHotelId());
        if (hotel != null) {
            Review review = createReview(createReviewDTO);
            saveNewReview(hotel, review);
        }
    }

    private void saveNewReview(Hotel hotel, Review review) {
        List<Review> hotels = hotel.getReviews();
        hotels.add(review);
        hotel.setReviews(hotels);
        hotelsService.save(hotel);
    }

    private Review createReview(CreateReviewDTO createReviewDTO) {
        Review review = new Review();
        review.setComment(createReviewDTO.getComment());
        User user = customerService.findByEmail(createReviewDTO.getUserEmail());
        review.setUser(user);
        review.setRating(createReviewDTO.getRating());
        reviewRepository.save(review);
        return review;
    }
}
