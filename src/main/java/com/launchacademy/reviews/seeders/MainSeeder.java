package com.launchacademy.reviews.seeders;


import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder  implements CommandLineRunner {
    private VenueService venueService;

    @Autowired
    public MainSeeder(VenueService venueService){
        this.venueService = venueService;
    }

    @Override
    public void run(String... args) throws Exception{
        Venue venue1 = new Venue();
        Venue venue2 = new Venue();

        if (venueService.count() <= 0){
            venue1.setName("El Corazon");
            venue1.setCity("Seattle");
            venue1.setState("WA");
            venue1.setAddress("109 Eastlake Ave E");
            venue1.setZipCode("98109");
<<<<<<< HEAD
            venue1.setPhoneNumber("(206) 262-0482");
=======
            venue1.setPhoneNumber("206-262-0482");
>>>>>>> 151da6d73cad9ca399a3be3ddb1003c7c4e65a87
            venue1.setCapacity(800);
            venue1.setDescription("We approach each day with the ultimate achievement in mind to make the Funhouse and El Corazon the best place to see a show, play a show, have a drink, spend time with friends or enjoy a meal in Seattle.");
            venue1.setImgUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO21cCp0LroHtwxXu-_Ds3VcWAuaEVISW8Tw&usqp=CAU");

            venueService.save(venue1);

            venue2.setName("Showbox SoDo");
            venue2.setCity("Seattle");
            venue2.setState("WA");
            venue2.setAddress("1700 1st Ave S");
            venue2.setZipCode("98134");
            venue2.setPhoneNumber("206-652-0997");
            venue2.setCapacity(1150);
            venue2.setDescription("Showbox added to its family in 2007 with the addition of the larger Showbox SoDo, a converted-warehouse-turned-concert venue located just south of the sports stadiums in the SoDo district. The space boasts beautiful wood-beam and brick architecture, and has incredible production capabilities and sightlines.");
            venue2.setImgUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsX5K_qncFXLDr6hHjs3H7xoJcYOoIwvUew&usqp=CAU");

            venueService.save(venue2);
        }
    }
}
