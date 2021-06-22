import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Route, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import "foundation-sites";
import $ from "jquery";

const App = (props) => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
  )
};

export default hot(App);
