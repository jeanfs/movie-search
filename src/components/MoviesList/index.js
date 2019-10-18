import React, { Component } from 'react';
import { connect } from 'react-redux'

// Component's styles
import { Card } from './styles';

// Global styles
import { Container, Row, Col } from '../../styles/grid';

class MoviesList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg='3'>
            <Card>Movie</Card>
          </Col>
          <Col lg='3'>
            <Card>Movie</Card>
          </Col>
          <Col lg='3'>
            <Card>Movie</Card>
          </Col>
          <Col lg='3'>
            <Card>Movie</Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null)(MoviesList);
