import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import ConcertVenueForm from "./ConcertVenueForm";
import VenueIndex from "./VenueIndex.js";
import Admin from "./Admin";
import EditVenue from "./EditVenue";
import VenueShow from "./VenueShow.js";

const NavBar = (props) => {

const [concertVenues, setConcertVenues] = useState([])
const venueName = props.match.params.type

const fetchConcertVenues = async () => {
  try {
    const response = await fetch(`/api/v1/venues/${venueId}`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
  } catch (error) {
    console.error(`There was an error in fetch: ${error}`);
  }
}

  return (
    <div className="row column">
      <div className="navbar">
        </div>
          <nav>
            <Link to="/">Home</Link>|
            <Link to="/concert-venues">Venues</Link>|
            <Link to="/concert-venues/new">Add Venue</Link>
          </nav>
        <div className="navbar">
      </div>
     
      <Switch>
        <Route exact path="/">
          <Redirect to="/concert-venues" />
        </Route>
        <Route exact path="/concert-venues" component={VenueIndex} />
        <Route exact path="/concert-venues/new" component={ConcertVenueForm} />
        <Route exact path="/admin/concert-venues" component={Admin} />
        <Route exact path="/admin/:id" component={EditVenue} />
        <Route exact path="/concert-venues/:id" component={VenueShow} />
      </Switch>
  
    </div>
  )
}

export default NavBar;
