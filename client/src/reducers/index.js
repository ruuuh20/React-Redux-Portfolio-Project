import { combineReducers } from 'redux';
import listingsReducer from './listings_reducer'
import commentsReducer from './comments_reducer'
import realtorsReducer from './realtors_reducer'

const rootReducer = combineReducers({
  listings: listingsReducer,
  comments: commentsReducer,
  realtors: realtorsReducer
});

export default rootReducer
