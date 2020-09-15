import React from "react";
import { Route, Switch, withRouter } from "react-router";
import Home from "./scenes/Home";
import Channel from "./scenes/Channel";
import './custom.css';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tv" component={Channel} />
    </Switch>
  );
};

export default withRouter(App);
