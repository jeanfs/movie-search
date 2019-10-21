import React, { Component } from 'react';

// Component's styles
import {
  MoviePage,
  MovieThumb,
  MoviePageHeader
} from './styles';

// noThumb image
import noThumbImg from '../../images/no-poster.jpg';

// Global styles
import { Container, Row, Col } from '../../styles/grid';

class MovieDetails extends Component {
  state = {
    movie: null
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      movie: this.props.movie
    })
  }

  render() {
    const state = this.state;
    return (
      <MoviePage>
        <Container>
          <Row>
            <Col sm="6" md="3">
              <MovieThumb src={state.movie.Poster !== 'N/A' ? state.movie.Poster : noThumbImg} alt={state.movie.Title} />
            </Col>
            <Col sm="6" md="9">
              <MoviePageHeader>
                <h1>{state.movie.Title}</h1>
                <p>{state.movie.Plot}</p>
              </MoviePageHeader>

              <Row>
                <Col sm="4" md="3">
                  <strong>Lançamento:</strong><br/>
                  {state.movie.Year}
                </Col>
                <Col sm="4" md="3">
                  <strong>Duração:</strong><br/>
                  {state.movie.Runtime}
                </Col>
                <Col sm="4" md="3">
                  <strong>Diretor:</strong><br/>
                  {state.movie.Director}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MoviePage>
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.isLoading !== this.props.isLoading ){
      this.setState({isLoading: nextProps.isLoading})
    }

    if(nextProps.movie !== this.props.movie ){
      this.setState({movie: nextProps.movie})
    }
  }
}


export default MovieDetails;
