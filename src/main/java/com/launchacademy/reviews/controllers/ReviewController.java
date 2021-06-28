package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.services.ReviewService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

  private ReviewService reviewService;

  @Autowired
  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> deleteReview (@PathVariable Integer id) {
    Optional<Review> reviewToDelete = reviewService.findById(id);
    if(reviewToDelete.isPresent()) {
      reviewService.delete(reviewToDelete.get());
      return new ResponseEntity<>(id, HttpStatus.OK);
    }
    return new ResponseEntity<>(id, HttpStatus.NOT_FOUND);
  }
}
