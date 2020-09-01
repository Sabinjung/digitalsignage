import React from 'react';
import { Route, Switch, withRouter } from "react-router";
import TV from "./scenes/TV";

const App: React.FC = () => {

  return (
    <Switch>
      <Route path="/" component={TV} />
    </Switch>
  );
};

export default withRouter(App);
