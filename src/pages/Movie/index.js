import React, { Component } from 'react';
import { Container, } from 'reactstrap';

// Components
import SiteHeader from '../../components/SiteHeader'

class Movie extends Component {
  render() {
    return (
      <div>
        <SiteHeader></SiteHeader>
        <Container>
          Movie page
        </Container>

      </div>
    );
  }
}

export default Movie;
