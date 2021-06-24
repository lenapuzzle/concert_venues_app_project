package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.ReviewService;
import com.launchacademy.reviews.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReviewSeeder {
  private final ReviewService reviewService;
  private final VenueService venueService;

  @Autowired
  public ReviewSeeder(ReviewService reviewService, VenueService venueService) {
    this.reviewService = reviewService;
    this.venueService = venueService;
  }

  public void run(String... args) throws Exception {
    if (reviewService.count() <= 0){
      Venue elCorazon = venueService.findByName("El Corazon");
      Review review1 = new Review();
      review1.setEventName("Moby");
      review1.setUserName("Big Fan");
      review1.setText("Service was great, but the view could be better");
      review1.setRating(10);
      review1.setVenue(elCorazon);
      reviewService.save(review1);

      Review review2 = new Review();
      review2.setEventName("IC3PEAK");
      review2.setUserName("OMG Yes");
      review2.setText("Sound was great, waffles were delicious!!!");
      review2.setRating(8);
      review2.setVenue(elCorazon);
      reviewService.save(review2);

      Venue soDo = venueService.findByName("Showbox SoDo");
      Review review3 = new Review();
      review3.setEventName("Coldplay");
      review3.setUserName("Rock star");
      review3.setText("Drinks were warm");
      review3.setRating(5);
      review3.setVenue(soDo);
      reviewService.save(review3);

      Review review4 = new Review();
      review4.setEventName("Eagles");
      review4.setUserName("oldie");
      review4.setText("High quality music, as usual!");
      review4.setRating(8);
      review4.setVenue(soDo);
      reviewService.save(review4);
    }

  }
}
