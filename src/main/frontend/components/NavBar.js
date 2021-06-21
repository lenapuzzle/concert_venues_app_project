import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom"

import ConcertVenueForm from "./ConcertVenueForm"
const NavBar = props => {



return(
<div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/concert-venues" />
        </Route>
        <Route exact path="/concert-venues/new" component={ConcertVenueForm} />
      </Switch>
</div>
)
}

export default NavBar