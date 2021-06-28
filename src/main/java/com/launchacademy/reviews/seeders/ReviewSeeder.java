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
        if (reviewService.count() <= 0) {
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

            Venue thaliaHall = venueService.findByName("Thalia Hall");
            Review review5 = new Review();
            review5.setEventName("Phil Lesh and the Terrapin Family Band");
            review5.setUserName("DeadHead5");
            review5.setText("Last week was my second time at Thalia Hall and I'm glad Chicago has a venue like this.\n"
                    + "\n"
                    + "I came to see Phil Lesh and the Terrapin Family Band, which was awesome to be able to see member of the Grateful Dead in a smaller venue.\n"
                    + "\n"
                    + " Be prepared to stay in a line and if dress warm. Chicago weather can be brutal. Security made sure to keep people moving so everyone could get out of the cold.\n"
                    + "\n"
                    + "It's a big open floor with a small mezzanine with seats. Good amount of bars on the first floor. Thankfully the bar lights/crowd doesn't interfere with the show. \n"
                    + "\n"
                    + "The acoustics were great. The venue was rehabed a few years ago and they did a great job of keeping original aesthetic while modernizing the sound. I read it was originally an opera house, it's awesome that the stayed true the venue. \n"
                    + "\n" + "Thalia Hall is one of the best venues in Chicago!");
            review5.setRating(10);
            review5.setVenue(thaliaHall);
            reviewService.save(review5);

            Venue greatAmericanMusicHall = venueService.findByName("Great American Music Hall");
            Review review6 = new Review();
            review6.setEventName("The 70s");
            review6.setUserName("SanFranMan");
            review6.setText("This was my favorite venue to go to in the 70's when they booked jazz.\n"
                    + " I saw a lot of greate concerts here., when I was younger\n"
                    + "I sat pretty much everywhere, upstairs in the balcony and on the ground floor. It used to cost a dollar for most tickets!Some of the best shows I saw were Sarah Vaughan, Joe Williams, Toots Thielmanns, Dizzy Gillespie, Chick Corea, the Count Basie Band and others lost in the mists of time. "
                    + " It was a great venue back in the day. I haven't been there for years but its still around an kicking. It was a nice sized venue w/ great sound, between the small clubs like Keystone Corner and the large venues like the Masonic Auditorium.  I have greate  memories of evenings spent here with friends listening to great music.  A staple of San Fran that I hope stays forever");
            review6.setRating(9);
            review6.setVenue(greatAmericanMusicHall);
            reviewService.save(review6);

            Venue artspace = venueService.findByName("3S Artspace");
            Review review7 = new Review();
            review7.setEventName("Animal Collective");
            review7.setUserName("Dirtywater");
            review7.setText(
                    "This place is amazing....Drove here from Boston to check out the show last night. Great Venue, love the taco bar out front.  Nice small town vibe. I hope to get to see another show soon.\n"
                            + "\n");
            review7.setRating(9);
            review7.setVenue(artspace);
            reviewService.save(review7);

            Venue theSinclair = venueService.findByName("The Sinclair");
            Review review8 = new Review();
            review8.setEventName("Run the Jewels");
            review8.setUserName("musicfan");
            review8.setText(
                    " The Sinclair is one of the best venues in Boston. I love the small club vibe and the fact that there's great view of the stage no matter where you stand.  That being said make sure you get there early, it was a bit crowded at sold out shows "
                            + "\n"
                            + "Parking can be a bit tough due to the level of activity in that area of Cambridge. There is a pay lot down the street but its small and quite expensive.\n"
                            + "\n");
            review8.setRating(9);
            review8.setVenue(theSinclair);
            reviewService.save(review8);

            Venue theRoyale = venueService.findByName("The Royale");
            Review review9 = new Review();
            review9.setEventName("Kamasi Washington");
            review9.setUserName("JazzzzzMannnnn");
            review9.setText(" This is a decent concert venue, if there's an act you really want to see.\n "
                    + "Turns into a club after concerts so shows end early and they tend to rush you out.\n"
                    + " Sound is hit or miss. Really depends on if the band's engineer knows how to work with the space. From what I witness they the venue doesn't see like much help. "
                    + "Make sure to get there early the front of the floor is on a platform (for the club dance floor). If you don't get there early you'll get stuck on the lower floor and its hard to see the stage unless you're very tall. \n");
            review9.setRating(9);
            review9.setVenue(theRoyale);
            reviewService.save(review9);

            Review review10 = new Review();
            review10.setEventName("Grateful Dead");
            review10.setUserName("MayerisnoGarcia");
            review10.setText(
                    "I saw the dead here on August 13, 1975.  It was the first time Blues for Allah was performed live in its entirety as the the show wasbroadcast on radio stations across the country to promote the album. There's something about the performance of 'Franklin's Tower' that has never left me considering its a pretty straight forward performance.  ");
            review10.setRating(10);
            review10.setVenue(greatAmericanMusicHall);
            reviewService.save(review10);

            Review review11 = new Review();
            review11.setEventName("Four Tet");
            review11.setUserName("FreemontTroll");
            review11.setText(
                    "I like this venue. Its smaller than some others downtown and you can get close to the stage if you arrive early enough. It's small enough that you pretty much you always have a good view. There's a bar with seats if you don't want to stand and there is also a bar on the main floor. I wish the beer selection was a better. Mix drinks are strong :)");
            review11.setRating(8);
            review11.setVenue(soDo);
            reviewService.save(review11);

            Venue wangCenter = venueService.findByName("Boch Center - Wang Theatre");
            Review review12 = new Review();
            review12.setEventName("Neil Young Solo");
            review12.setUserName("Downbytheriver");
            review12.setText("Neil was on fire last night. Keep on Rockin' in the Free World!");
            review12.setRating(10);
            review12.setVenue(wangCenter);
            reviewService.save(review12);

            Review review13 = new Review();
            review13.setEventName("Neil Inch Nails");
            review13.setUserName("BeginningoftheEnd");
            review13.setText("Got to see Nine Inch Nails last night at the Wang Center! Was lucky enough to get front row center mezzanine!!! I love everything about the Wang Center except the congestion walking into the foyer with the bars and merch stand. Could be solved by putting more bars and better sign as you walked in "
                + "Setlist: The Fragile!!!!!!"
                + "Sound: Top Top!"
                + " Views: Can't speak to balcony views but the mezzanine is great and the orchestra is great as along as your not too far back or too far off to the sides. ");
            review13.setRating(10);
            review13.setVenue(wangCenter);
            reviewService.save(review13);
        }
    }
}
