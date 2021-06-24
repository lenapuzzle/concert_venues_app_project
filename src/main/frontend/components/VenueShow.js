import React, { useEffect, useState } from "react";

import VenueShowReviews from "./VenueShowReviews.js";

const VenueShow = (props) => {
  const [venue, setVenue] = useState({ reviews: [] });
  const venueId = props.match.params.id;

  const fetchVenue = async () => {
    try {
      const response = await fetch(`/api/v1/venues/${venueId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const venueData = await response.json();
      setVenue(venueData.venue);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  useEffect(() => {
    fetchVenue();
  }, []);

  let reviews = venue.reviews.map((review) => {
    return <VenueShowReviews key={review.id} review={review} />;
  });

  return (
    <div>
      <div>
        <h2>{venue.name}</h2>
      </div>
      <div>
        <img src={venue.imgUrl} />
      </div>
      <div>
        <p>{venue.description}</p>
      </div>
      <h3>Address:</h3>
      <div>
        <span>{venue.address}, </span>
        <span>{venue.city}, </span>
        <span>{venue.state} </span>
        <span>{venue.zipCode}</span>
      </div>
      <h3>Phone Number:</h3>
      <div>
        <span>{venue.phoneNumber}</span>
      </div>
      <div>
        <h4>Capacity: {venue.capacity}</h4>
      </div>
      <h3>Reviews:</h3>
      <div>{reviews}</div>
    </div>
  );
};
export default VenueShow;
