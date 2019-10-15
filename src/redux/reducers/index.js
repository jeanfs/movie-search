import {
  START_FETCHING,
  SET_CURRENT_PAGE,
  SET_MOVIE_LIST,
  SET_MOVIE_PAGE
} from '../../constants';

const initialState = {
  searchTerm: '',
  items: {
    search: [],
    totalResults: 0
  },
  page: 1,
  item: {},
  isLoading: false
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_MOVIE_LIST) {
  	return {
  		...state,
  		items: action.data,
  		isLoading: false
  	};
  }

  if (action.type === SET_MOVIE_PAGE) {
  	return {
  		...state,
  		item: action.data,
  		isLoading: false
  	};
  }

  if (action.type === START_FETCHING) {
  	return {
  		...state,
  		isLoading: true
  	};
  }

  if (action.type === SET_CURRENT_PAGE) {
  	return {
  		...state,
  		page: action.data
  	};
  }

  return state;
}
export default rootReducer;
