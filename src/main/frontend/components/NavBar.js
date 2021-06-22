import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import ConcertVenueForm from "./ConcertVenueForm";
import VenueIndex from "./VenueIndex.js";
import VenueShow from "./VenueShow";

const NavBar = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/concert-venues" />
        </Route>
        <Route exact path="/concert-venues/new" component={ConcertVenueForm} />
        <Route exact path="/concert-venues" component={VenueIndex} />
        <Route exact path="/concert-venues/:id" component={VenueShow} />
      </Switch>
    </div>
  );
};

export default NavBar;
