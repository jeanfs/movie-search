import React, { Component } from 'react';

// Component's dependencies
import SearchForm from '../SearchForm';

// Component's styles
import { Title, Wrapper } from './styles';

// Global styles
import { Container, Row, Col } from '../../styles/grid';

class SiteHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg='6'>
              <Title>buscar filme</Title>
            </Col>
            <Col lg='6'>
              <SearchForm />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default SiteHeader;
