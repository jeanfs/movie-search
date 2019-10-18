import {
  CLEAR_SEARCH,
  LOADING_SEARCH,
  SET_SEARCH,
  SET_SEARCH_QUERY
} from '../constants';
import { searchAPI } from '../api'

/**
 * getMovies
 * Makes an API call using the search term as a movie name, and also the current page
 *
 * @param {string} query - the search term
 * @param {number} currentPage - the current page
 */

export const getMovies = (query, currentPage = 1) => dispatch => {
  if (currentPage === 1) {
    dispatch({
      type: CLEAR_SEARCH
    })
  }

  dispatch({
    type: LOADING_SEARCH,
    isLoading: true
  })

  dispatch({
    type: SET_SEARCH_QUERY,
    query: query
  })

  return searchAPI({ s: query, currentPage })
    .then(data => {
      dispatch({
        type: SET_SEARCH,
        results: data.resultado,
        total: data.total,
        currentPage: data.currentPage,
        query: query
      })
    })
    .catch(err => {
      throw err
    })
    .finally(() => {
      dispatch({
        type: LOADING_SEARCH,
        isLoading: false
      })
    })
}

export const clearResults = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })

  dispatch({
    type: SET_SEARCH_QUERY,
    query: ''
  })
}
