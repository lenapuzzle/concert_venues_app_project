package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.errorHandlers.ErrorDetails;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.ReviewService;
import java.util.Date;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/v1/venues/{id}")
// RIGHT PATH???
@RequestMapping("/api/v1/reviews")
public class ReviewController {
  private ReviewService reviewService;

  @Autowired
  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }
  // RIGHT PATH???
  @PutMapping("/venues/{venueId}/reviews")
  public ResponseEntity<Object> modifyReview(@Valid @RequestBody Review review,
      BindingResult bindingResult, @PathVariable Integer reviewId) {
    review.setId(reviewId);
    if (bindingResult.hasErrors()) {
      Map<String, String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap,
          "validation failed on edit");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    reviewService.save(review);
    return new ResponseEntity<Object>(review, HttpStatus.CREATED);
  }
}
