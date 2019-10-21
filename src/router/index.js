import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Movie from '../pages/Movie';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Home} />
        <Route exact path="/movie/:movieID" component={Movie} />
      </Switch>
    )
  }
}

export default AppRouter;
