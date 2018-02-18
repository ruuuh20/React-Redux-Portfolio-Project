import { combineReducers } from 'redux';
import listingsReducer from './listings_reducer'
import commentsReducer from './comments_reducer'

const rootReducer = combineReducers({
  listings: listingsReducer,
  comments: commentsReducer
});

export default rootReducer
