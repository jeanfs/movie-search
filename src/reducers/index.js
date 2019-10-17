import { moviesReducer } from './movies'
import { combineReducers } from 'redux'

// Combining all the reducers
const rootReducers = combineReducers({
  movies: moviesReducer
})

export default rootReducers
