import {
  BASE_URL,
  API_KEY,
  START_FETCHING,
  SET_CURRENT_PAGE,
  SET_MOVIE_LIST,
  SET_MOVIE_PAGE
} from './constants';

export function getMovieList(data) {
	return dispatch => {
		dispatch({ type: START_FETCHING });
		dispatch({ type: SET_CURRENT_PAGE, data: data.page });
        return fetch(`${ BASE_URL }${ API_KEY }&s=${ data.q }&page=${data.page}`)
            .then(result=>result.json())
            .then(items=> {
            	dispatch({ type: SET_MOVIE_LIST, data: items });
            });
  };
};

export function getMovieDetail(data) {
	return dispatch => {
		dispatch({ type: START_FETCHING });
        return fetch(`${ BASE_URL }${ API_KEY }&i=${ data }&plot=full&r=json`)
            .then(result=>result.json())
            .then(item=> {
            	dispatch({ type: SET_MOVIE_PAGE, data: item });
            });
  };
};
