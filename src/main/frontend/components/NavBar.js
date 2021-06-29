import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import ConcertVenueForm from "./ConcertVenueForm";
import VenueIndex from "./VenueIndex.js";
import Admin from "./Admin";
import EditVenue from "./EditVenue";
import VenueShow from "./VenueShow.js";

const NavBar = (props) => {
  return (
    <div>
      <h1 className="coName">Live From Here</h1>
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
  );
};

export default NavBar;
