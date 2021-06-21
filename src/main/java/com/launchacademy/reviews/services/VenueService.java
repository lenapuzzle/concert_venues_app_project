package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.repositories.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VenueService {
private VenueRepository venueRepository;

  @Autowired
  public VenueService( VenueRepository venueRepository) {
    this.venueRepository = venueRepository;
  }

public Iterable<Venue> findAllVenues(){
    return venueRepository.findAll();
}


}
