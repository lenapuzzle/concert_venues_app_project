package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Venue;
import com.launchacademy.reviews.services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VenueSeeder {
  private  VenueService venueService;

  @Autowired
  public VenueSeeder(VenueService venueService) {
    this.venueService = venueService;
  }

  public void run(String... args) throws Exception {

    Venue venue1 = new Venue();
    Venue venue2 = new Venue();
    Venue venue3 = new Venue();
    Venue venue4 = new Venue();
    Venue venue5 = new Venue();
    Venue venue6 = new Venue();
    Venue venue7 = new Venue();
    Venue venue8 = new Venue();
    Venue venue9 = new Venue();

    if (venueService.count() <= 0) {

      venue1.setName("El Corazon");
      venue1.setCity("Seattle");
      venue1.setState("WA");
      venue1.setAddress("109 Eastlake Ave E");
      venue1.setZipCode("98109");
      venue1.setPhoneNumber("206-262-0482");
      venue1.setCapacity(800);
      venue1.setDescription(
          "We approach each day with the ultimate achievement in mind to make the Funhouse and El Corazon the best place to see a show, play a show, have a drink, spend time with friends or enjoy a meal in Seattle.");
      venue1.setImgUrl(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO21cCp0LroHtwxXu-_Ds3VcWAuaEVISW8Tw&usqp=CAU");

      venueService.save(venue1);

      venue2.setName("Showbox SoDo");
      venue2.setCity("Seattle");
      venue2.setState("WA");
      venue2.setAddress("1700 1st Ave S");
      venue2.setZipCode("98134");
      venue2.setPhoneNumber("206-652-0997");
      venue2.setCapacity(1150);
      venue2.setDescription(
          "Showbox added to its family in 2007 with the addition of the larger Showbox SoDo, a converted-warehouse-turned-concert venue located just south of the sports stadiums in the SoDo district. The space boasts beautiful wood-beam and brick architecture, and has incredible production capabilities and sightlines.");
      venue2.setImgUrl(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsX5K_qncFXLDr6hHjs3H7xoJcYOoIwvUew&usqp=CAU");

      venueService.save(venue2);

      venue3.setName("The Royale");
      venue3.setCity("Boston");
      venue3.setState("MA");
      venue3.setAddress("279 Tremont St");
      venue3.setZipCode("02116");
      venue3.setPhoneNumber("617-338-7699");
      venue3.setCapacity(1200);
      venue3.setDescription("Spacious multilevel megaclub draws trendy crowds for DJs, dancing & live-music shows.");

      venue3.setImgUrl(
          "https://royaleboston.com/wp-content/uploads/2018/06/16114501_1354904757905809_2790556672887727324_n-300x200.jpg");

      venueService.save(venue3);

      venue4.setName("The Sinclair");
      venue4.setCity("Cambridge");
      venue4.setState("MA");
      venue4.setAddress("52 Church Street");
      venue4.setZipCode("02138");
      venue4.setPhoneNumber("617-547-5200");
      venue4.setCapacity(525);
      venue4.setDescription(
          "This gastropub & music venue features New American fare and live acts, with an open kitchen & patio..");
      venue4.setImgUrl(
          "https://64.media.tumblr.com/6ddda14544cb4e2bfa587357fccdaa82/4a2265bbab98e629-b5/s400x600/7056fcf7a1b82a90b26e99c8e79bdcdd1fd7dc04.jpg");

      venueService.save(venue4);

      venue5.setName("3S Artspace");
      venue5.setCity("Portsmouth");
      venue5.setState("NH");
      venue5.setAddress("319 Vaughan St");
      venue5.setZipCode("03801");
      venue5.setPhoneNumber("603-766-3330");
      venue5.setCapacity(400);
      venue5.setDescription(
          "3S is committed to presenting a wide range of music, with a focus on adventurous, underrepresented, and unconventional acts. Our aim is to showcase some of the best national and international talent, and shine the spotlight on some of the best talent in the region.");
      venue5.setImgUrl(
          "https://s3.amazonaws.com/media.wbur.org/wordpress/18/files/2015/09/pic3SDavidJMurrayCleareyephotocom-540x360.jpg");

      venueService.save(venue5);

      venue6.setName("Great American Music Hall");
      venue6.setCity("San Francisco");
      venue6.setState("CA");
      venue6.setAddress("859 O'Farrell S");
      venue6.setZipCode("94109");
      venue6.setPhoneNumber("415-885-0750");
      venue6.setCapacity(600);
      venue6.setDescription(
          "The Great American Music Hall is a concert hall in San Francisco, California. It is located on O'Farrell Street in the Tenderloin neighborhood on the same block as the Mitchell Brothers O'Farrell Theatre.");
      venue6.setImgUrl(
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Great_American_Music_Hall_%28April_1976%29.jpg");

      venueService.save(venue6);

      venue7.setName("Hampton Beach Casino Ballroom");
      venue7.setCity("Hampton");
      venue7.setState("NH");
      venue7.setAddress(" 169 Ocean Blvd");
      venue7.setZipCode("03842");
      venue7.setPhoneNumber("603-929-4100");
      venue7.setCapacity(2200);
      venue7.setDescription(
          "The Hampton Beach Casino Ballroom is a seasonal live music and comedy venue located on the boardwalk of Hampton Beach, New Hampshire, United States. The venue is open from April to November, and within those eight months schedules upwards of 70 shows.");
      venue7.setImgUrl(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4FLgj0cTnrhhAjvbAzUzXYzwSOZwhWHa9u5wa97jPYeQqee9c059nL2HfPqBTHXPe3Y&usqp=CAU");

      venueService.save(venue7);

      venue8.setName("Thalia Hall");
      venue8.setCity("Chicago");
      venue8.setState("IL");
      venue8.setAddress("1807 S. Allport St.");
      venue8.setZipCode("60608");
      venue8.setPhoneNumber("312-526-3851");
      venue8.setCapacity(800);
      venue8.setDescription(
          "This landmark venue, designed as an opera house in 1892, hosts concerts by well-known musical acts.");
      venue8.setImgUrl("https://columbiachronicle.com/wp-content/uploads/2014/02/f1d6bc124037959f0aa5e7a07ba56b6f.jpg");

      venueService.save(venue8);

      venue9.setName("Boch Center - Wang Theatre");
      venue9.setCity("Boston");
      venue9.setState("MA");
      venue9.setAddress("270 Tremont St");
      venue9.setZipCode("02116");
      venue9.setPhoneNumber("617-482-9393");
      venue9.setCapacity(3500);
      venue9.setDescription(
          "The Wang Theatre is a theatre in Boston. It originally opened in 1925 as the Metropolitan Theatre and was later renamed the Music Hall. It was designed by Clarence Blackall and is located at 252–272 Tremont Street in the Boston Theatre District. The theatre is operated as part of the Boch Center.");
      venue9.setImgUrl("https://celebrity-series.s3.amazonaws.com/files/venues/wide-med-534a0801.jpg");

      venueService.save(venue9);

    }
  }
}
