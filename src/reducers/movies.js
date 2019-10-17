import {
  FETCH_MOVIES
} from '../constants';

const initialState = {
  searchTerm: '',
  search: {
    list: [],
    totalResults: 0
  },
  page: 1,
  item: {},
  isLoading: false
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        search: action.newValue
      };
    default:
      return state;
  }
};
