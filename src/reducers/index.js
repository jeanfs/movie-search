import { combineReducers } from 'redux'
import moviesReducer from './movies'

// Combining all the reducers
const rootReducer = combineReducers({
  movies: moviesReducer
})

export default rootReducer
