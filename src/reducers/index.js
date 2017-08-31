import { combineReducers } from 'redux';
import AppsReducer from './AppsReducer';
import RedditReducer from './RedditReducer';

export default combineReducers({
  apps: AppsReducer,
  reddit: RedditReducer
});
