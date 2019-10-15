import React, { Component } from 'react';
import { Container, } from 'reactstrap';

// Components
import SiteHeader from '../../components/SiteHeader'

class Home extends Component {
  render() {
    return (
      <div>
        <SiteHeader></SiteHeader>
        <Container>
          Hello world
        </Container>

      </div>
    );
  }
}

export default Home;
