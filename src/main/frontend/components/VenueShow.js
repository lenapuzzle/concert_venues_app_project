import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const VenueShow = (props) => {
  let location = useLocation();
  const [venue, setVenue] = useState({});
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
      console.log(venueData);
      setVenue(venueData.venue);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  useEffect(() => {
    fetchVenue();
  }, [location.pathname]);

  
  const reviews = venue.reviews.map(review => {
    return (
      <div>
        review.eventName
      </div>
    )
  })

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
      <h4>Capacity:</h4>
      <div>
        <span>{venue.capacity}</span>
      </div>
        {reviews}
    </div>
  );
};
export default VenueShow;
