import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Component's styles
import {
  List,
  Title,
  Card,
  CardThumb,
  CardTitle
} from './styles';

// noThumb image
import noThumbImg from '../../images/no-poster.jpg';

// Global styles
import { Container, Row, Col } from '../../styles/grid';

class MoviesList extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: ''
  }

  render() {
    return (
      <List id="moviesList">
        <Container>
          {this.state.movies.length > 0 &&
            <Title>resultados da busca {this.state.query ? '- ' + this.state.query : ''}</Title>
          }
          <Row>
            {this.state.movies.map(item => (
              <Col key={item.imdbID} lg='3'>
                <Card>
                  <Link to={`/movie/${item.imdbID}`}>
                    <CardThumb noThumb={item.Poster === 'N/A'}>
                      <img src={item.Poster !== 'N/A' ? item.Poster : noThumbImg} alt={'Imagem de: ' + item.Title} />
                    </CardThumb>
                    <CardTitle>{item.Title}</CardTitle>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </List>
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.query !== this.props.query ){
      this.setState({query: nextProps.query})
    }

    if(nextProps.movies !== this.props.movies ){
      this.setState({movies: nextProps.movies})
    }

    if(nextProps.isLoading !== this.props.isLoading ){
      this.setState({isLoading: nextProps.isLoading})
    }
  }

  componentDidUpdate() {
    document.getElementById("moviesList").scrollIntoView({ behavior: 'smooth' })
  }
}

const mapStateToProps = store => ({
  movies: store.movieSearch.results,
  query: store.movieSearch.query,
  isLoading: store.movieSearch.isLoading
});

export default connect(mapStateToProps)(MoviesList);
