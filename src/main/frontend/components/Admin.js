import React, { useState } from "react";
import VenueIndex from "./VenueIndex";

const Admin = props => {
  const [isAdmin, setIsAdmin] = useState(true);
  
  let displayVenues;
  if(isAdmin) {
    displayVenues = <VenueIndex isAdmin={isAdmin} />
  }

  return (
    <main>
      <h1>Concert Venues Admin</h1>
      {displayVenues}
    </main>
  )
}

export default Admin;