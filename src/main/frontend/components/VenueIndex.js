import React, { useState, useEffect } from "react";

import VenueTile from "./VenueTile";

const VenueIndex = (props) => {
  const [venues, setVenues] = useState([]);

  const getVenues = async () => {
    try {
      const response = await fetch("/api/v1/venues");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setVenues(responseBody.venues);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  useEffect(() => {
    getVenues();
  }, []);

  const venueTiles = venues.map((venue) => {
    return <VenueTile key={venue.id} venue={venue} />;
  });

  return (
    <div>
      <h1>Venues</h1>
      {venueTiles}
    </div>
  );
};

export default VenueIndex;
