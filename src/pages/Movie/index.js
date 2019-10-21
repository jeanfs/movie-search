import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getMovieDetails } from '../../actions/movieDetails'

// Components
import SiteHeader from '../../components/SiteHeader'
import MovieDetails from '../../components/MovieDetails'

class Movie extends Component {
  state = {
    isLoading: false,
    movie: null
  }

  componentWillMount() {
    this.props.dispatch(getMovieDetails(this.props.match.params.movieID))
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.isLoading !== this.props.isLoading ){
      this.setState({isLoading: nextProps.isLoading})
    }

    if(nextProps.movie !== this.props.movie ){
      this.setState({movie: nextProps.movie})
    }
  }

  render() {
    return (
      <React.Fragment>
        <SiteHeader small />
        {this.state.movie !== null &&
          <MovieDetails movie={this.state.movie} />
        }
      </React.Fragment>
    );
  }
}


const mapStateToProps = store => ({
  movie: store.movieDetails.movie,
  isLoading: store.movieDetails.isLoading
});

export default connect(mapStateToProps)(Movie);
