package com.launchacademy.reviews.seeders;


import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder  implements CommandLineRunner {
    private final VenueSeeder venueSeeder;
    private final ReviewSeeder reviewSeeder;

    @Autowired
    public MainSeeder(VenueSeeder venueSeeder, ReviewSeeder reviewSeeder){
        this.venueSeeder = venueSeeder;
        this.reviewSeeder = reviewSeeder;
    }

    @Override
    public void run(String... args) throws Exception {
        venueSeeder.run();
        reviewSeeder.run();
    }
}
