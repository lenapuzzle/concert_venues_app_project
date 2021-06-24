package com.launchacademy.reviews.repositories;

import org.springframework.data.repository.CrudRepository;
import com.launchacademy.reviews.models.Venue;

public interface VenueRepository extends CrudRepository<Venue, Integer> {

  public Venue findByName(String name);
}
