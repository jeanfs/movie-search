import {
  CLEAR_SEARCH,
  LOADING_SEARCH,
  SET_SEARCH,
  SET_SEARCH_QUERY
} from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  results: [],
  query: '',
  total: 0
}

const movieSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {


    /**
     * SET_SEARCH_QUERY
     * Saves the current search query
     */

    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      }


    /**
     * SET_SEARCH
     * Save the current search results to the store
     */

    case SET_SEARCH:
      return {
        ...state,
        results: [...state.results, ...action.results],
        total: action.total,
        currentPage: action.currentPage
      }


    /**
     * CLEAR_SEARCH
     * Clears any other previous search results
     */

    case CLEAR_SEARCH:
      return {
        ...state,
        isLoading: false,
        results: [],
        currentPage: 1,
        total: null
      }


    /**
     * LOADING_SEARCH
     * Toggles the 'isLoading' state of the search related components
     */

    case LOADING_SEARCH:
      return {
        ...state,
        isLoading: action.isLoading
      }

    default:
      return state
  }
}

export default movieSearchReducer
