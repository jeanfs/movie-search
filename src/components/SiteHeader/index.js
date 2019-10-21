import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component's dependencies
import SearchForm from '../SearchForm';

// Component's styles
import { Title, Wrapper } from './styles';

// Global styles
import { Container, Row, Col } from '../../styles/grid';

class SiteHeader extends Component {
  render() {
    return (
      <Wrapper small={this.props.small}>
        <Container>
          <Row>
            <Col lg='6'>
              <Title small={this.props.small}><Link to="/">buscar filme</Link></Title>
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
