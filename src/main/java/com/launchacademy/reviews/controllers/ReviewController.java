package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.errorHandlers.ErrorDetails;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.ReviewService;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

  private ReviewService reviewService;

  @Autowired
  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  @GetMapping("/{Id}")
  public  ResponseEntity<Map<String,Review>> getReview(@PathVariable Integer Id){
    Map<String, Review> requestedReview = new HashMap<>();
    Optional<Review> queriedReview = reviewService.findById(Id);
    if(queriedReview.isPresent()){
      requestedReview.put("review", queriedReview.get());
      return new ResponseEntity<Map<String,Review>>(requestedReview, HttpStatus.OK);
    }else{
      return new ResponseEntity<Map<String,Review>>(requestedReview, HttpStatus.NOT_FOUND);
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<Object> modifyReview(@Valid @RequestBody Review review,
      BindingResult bindingResult, @PathVariable Integer id) {
    review.setId(id);
    if (bindingResult.hasErrors()) {
      Map<String, String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap,
          "validation failed on edit");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    reviewService.save(review);
    return new ResponseEntity<Object>(review, HttpStatus.CREATED);

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
