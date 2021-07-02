package com.launchacademy.reviews.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.launchacademy.reviews.models.Venue;

import java.util.List;

public interface VenueRepository extends CrudRepository<Venue, Integer> {

  public Venue findByName(String name);

  public List<Venue> findAllByOrderByNameAsc();

}
