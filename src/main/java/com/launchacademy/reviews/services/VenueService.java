package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.repositories.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {
  private VenueRepository venueRepository;

  @Autowired
  public VenueService( VenueRepository venueRepository) {
    this.venueRepository = venueRepository;
  }

  public List<Venue> findAllVenues(){
    return (List<Venue>) venueRepository.findAll();
  }

  public Venue save(Venue venue) {
     return venueRepository.save(venue);
  }

  public Optional<Venue> findById(Integer id) {
      return venueRepository.findById(id);
  }

  public long count() {
    return venueRepository.count();
  }
}
