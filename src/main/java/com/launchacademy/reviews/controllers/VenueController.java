package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.errorHandlers.ErrorDetails;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.ReviewService;
import com.launchacademy.reviews.services.VenueService;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/venues")
public class VenueController {
  private VenueService venueService;
  private ReviewService reviewService;

  @Autowired
  public VenueController(VenueService venueService,
      ReviewService reviewService) {
    this.venueService = venueService;
    this.reviewService = reviewService;
  }

  @GetMapping
  public Map<String, Iterable<Venue>> getAllVenues(){
    Map<String,Iterable<Venue>> venuesMap = new HashMap<>();
    venuesMap.put("venues", venueService.findAllVenues());
    return venuesMap;
  }

  @GetMapping("/{id}")
  public ResponseEntity<Map<String,Venue>> getVenueById(@PathVariable Integer id){
    Map<String, Venue> requestedVenue = new HashMap<>();
    Optional<Venue> queriedVenue = venueService.findById(id);
    if(queriedVenue.isPresent()){
      requestedVenue.put("venue", queriedVenue.get());
      return new ResponseEntity<Map<String,Venue>>(requestedVenue, HttpStatus.OK);
    }else{
      return new ResponseEntity<Map<String,Venue>>(requestedVenue, HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping
  public ResponseEntity<Object> createVenue(@Valid @RequestBody Venue venue, BindingResult bindingResult ) {
    if (bindingResult.hasErrors()) {
      Map<String, String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap, "Validation Failed");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    Venue newVenue = venueService.save(venue);
    Map<String, Venue> venueMap = new HashMap<>();
    venueMap.put("venue", newVenue);
    return new ResponseEntity<Object>(venueMap, HttpStatus.CREATED);
  }

  @PostMapping("/{id}/reviews")
  public ResponseEntity<Object> createReview(@Valid @RequestBody Review review, BindingResult bindingResult, @PathVariable Integer id) {
    if(bindingResult.hasErrors()) {
      Map<String, String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap, "Validation Failed");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    Optional<Venue> foundVenue = venueService.findById(id);
    if(foundVenue.isEmpty()) {
      return new ResponseEntity<Object>(null, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    try {
      Review savedReview = reviewService.save(review);
      foundVenue.get().addReview(savedReview);
      venueService.save(foundVenue.get());
      Map<String, Review> reviewMap = new HashMap<>();
      reviewMap.put("review", savedReview);
      return new ResponseEntity<Object>(reviewMap, HttpStatus.CREATED);
    } catch(IllegalArgumentException e) {
      return new ResponseEntity<Object>(null, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
