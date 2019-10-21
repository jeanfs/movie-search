import {
  SET_MOVIE_DETAILS,
  CLEAR_MOVIE_DETAILS
} from '../constants';

const INITIAL_STATE = {
  movie: null,
  isLoading: false
}

const movieDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    /**
     * CLEAR_MOVIE_DETAILS
     * Clears the movie details object
     */

    case CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movie: null
      }

    /**
     * SET_MOVIE_DETAILS
     * Saves the clicked movie on store
     */

    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.movie
      }

    default:
      return state
  }
}

export default movieDetailsReducer
