import {
  FETCH_MOVIES
} from '../constants';

//import Api from '../api'


export const fetchMovies = value => dispatch => ({
  type: FETCH_MOVIES,
  search: value
});
