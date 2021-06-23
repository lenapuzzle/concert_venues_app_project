package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.services.VenueService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
  private VenueService venueService;

}
