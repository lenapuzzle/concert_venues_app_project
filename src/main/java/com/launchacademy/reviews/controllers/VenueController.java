package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.errorHandlers.ErrorDetails;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

  @PostMapping
  public ResponseEntity<Object> createVenue(@Valid @RequestBody Venue venue, BindingResult bindingResult ){
    if (bindingResult.hasErrors()){
      Map<String,String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap, "Validation Failed");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    Venue newVenue = venueService.save(venue);
    Map<String,Venue> venueMap= new HashMap<>();
    venueMap.put("venue",newVenue);
    return new ResponseEntity<Object>(venueMap, HttpStatus.CREATED);
  }

}
