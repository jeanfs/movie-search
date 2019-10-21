import { combineReducers } from 'redux'
import movieSearchReducer from './movieSearch'
import movieDetailsReducer from './movieDetails'

// Combining all the reducers
const rootReducer = combineReducers({
  movieSearch: movieSearchReducer,
  movieDetails: movieDetailsReducer
})

export default rootReducer
