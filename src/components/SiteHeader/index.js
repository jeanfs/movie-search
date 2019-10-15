import React, { Component } from 'react';

import { Title, Wrapper } from './styles';
import { Container, Row, Col } from '../../styles/grid';

class SiteHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg='6'>
              <Title>Buscar</Title>
            </Col>
            <Col lg='6'>
              Form
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default SiteHeader;
