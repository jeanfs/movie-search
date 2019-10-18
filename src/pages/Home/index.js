import React, { Component } from 'react';

// Components
import SiteHeader from '../../components/SiteHeader'
import MoviesList from '../../components/MoviesList'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHeader />
        <MoviesList />
      </React.Fragment>
    );
  }
}

export default Home;
