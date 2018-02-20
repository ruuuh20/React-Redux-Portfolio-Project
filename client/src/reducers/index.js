import { combineReducers } from 'redux';
import listingsReducer from './listings_reducer'
import commentsReducer from './comments_reducer'
import realtorsReducer from './realtors_reducer'
import sessionsReducer from './sessions_reducer'

const rootReducer = combineReducers({
  listings: listingsReducer,
  comments: commentsReducer,
  realtors: realtorsReducer,
  sessions: sessionsReducer
});

export default rootReducer
