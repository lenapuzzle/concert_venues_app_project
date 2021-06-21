package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/venues")
public class VenueController {
private VenueService venueService;

  @Autowired
  public VenueController(VenueService venueService) {
    this.venueService = venueService;
  }

  @GetMapping
  public Map<String, Iterable<Venue>> getAllVenues(){
    Map<String,Iterable<Venue>> venuesMap = new HashMap<>();
    venuesMap.put("venues", venueService.findAllVenues());
    return venuesMap;
  }
}
