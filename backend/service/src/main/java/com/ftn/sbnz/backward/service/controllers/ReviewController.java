package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.service.service.CreateReviewDTO;
import com.ftn.sbnz.backward.service.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/review")
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("")
    public void review(@RequestBody CreateReviewDTO createReviewDTO) {
        reviewService.createRideReview(createReviewDTO);
    }
}
