import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NotFound from "./NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/NotFound">
        <NotFound />
      </Route>
    </Switch>
  );
}
