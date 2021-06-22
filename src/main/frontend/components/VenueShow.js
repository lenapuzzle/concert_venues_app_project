import React, { useEffect, useState } from "react";

const VenueShow = (props) => {
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
  }, []);

  return <div>Live from the show page</div>;
};
export default VenueShow;
