import React, { useEffect, useState } from 'react'


const VenueField = props =>{
const [venues,setVenues]= useState([])


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

const venueOptions = venues.map(venue =>{
return (
  <option key={venue.id} value={venue.id}>
  {venue.name}
</option>
)

})

return(
  <div>
    <label htmlFor="venueId">Venue:</label>
    <select name="venueId" id="venueId" onChange={props.handleInputChange} value={props.venueId}>
      {venueOptions}
    </select>
  </div>
)
}

export default VenueField