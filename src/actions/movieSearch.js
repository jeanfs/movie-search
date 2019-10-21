import {
  CLEAR_SEARCH,
  LOADING_SEARCH,
  SET_SEARCH,
  SET_SEARCH_QUERY
} from '../constants';
import { searchAPI } from '../api';


/**
 * getMovies
 * Makes an API call using the search term as a movie name, and also the current page
 *
 * @param {string} query - the search term
 */

export const getMovies = (query) => dispatch => {

  // Set the loading state
  dispatch({
    type: LOADING_SEARCH,
    isLoading: true,
  })

  dispatch({
    type: SET_SEARCH_QUERY,
    query: query,
  })

  if (query === '' && query.length <= 2) {
    return
  }

  return searchAPI({ s: query, 'type': 'movie' })
    .then(data => {
      if(data.Response === 'True') {
        dispatch({
          type: SET_SEARCH,
          results: data.Search,
          total: data.totalResults,
          query: query,
        })
      } else {
        dispatch({
          type: SET_SEARCH,
          results: [],
          total: 0,
          query: query,
        })
      }
    })
    .catch(err => {
      throw err
    })
    .finally(() => {
      dispatch({
        type: LOADING_SEARCH,
        isLoading: false,
      })
    })

}

export const clearResults = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH,
  })

  dispatch({
    type: SET_SEARCH_QUERY,
    query: '',
  })
}
