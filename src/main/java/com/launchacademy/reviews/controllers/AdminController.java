package com.launchacademy.reviews.controllers;


import com.launchacademy.reviews.errorHandlers.ErrorDetails;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
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
@RequestMapping("/api/v1/admin")
public class AdminController {

  private VenueService venueService;

  @Autowired
  public AdminController(VenueService venueService) {
    this.venueService = venueService;
  }

  @PutMapping("/{venueId}")
  public ResponseEntity<Object> modifyVenue(@Valid @RequestBody Venue venue,
      BindingResult bindingResult, @PathVariable Integer venueId) {
    venue.setId(venueId);
    if (bindingResult.hasErrors()) {
      Map<String, String> errorMap = ErrorDetails.populateErrors(bindingResult);
      ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMap,
          "validation failed on edit");
      return new ResponseEntity<Object>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    venueService.save(venue);
    return new ResponseEntity<Object>(venue, HttpStatus.CREATED);
  }
}


