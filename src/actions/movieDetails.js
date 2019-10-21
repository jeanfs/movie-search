import {
  LOADING_SEARCH,
  SET_MOVIE_DETAILS
} from '../constants';
import { searchAPI } from '../api';

export const getMovieDetails = (movieID) => dispatch => {
  // Set the loading state
  dispatch({
    type: LOADING_SEARCH,
    isLoading: true,
  })

  return searchAPI({ i: movieID })
    .then(data => {
      dispatch({
        type: SET_MOVIE_DETAILS,
        movie: data,
      })
    })
    .catch(err => {
      throw err
    })
    .finally(
      // Set the loading state
      dispatch({
        type: LOADING_SEARCH,
        isLoading: false,
      })
    )
}
