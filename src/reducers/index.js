import { combineReducers } from 'redux';
import AppsReducer from './AppsReducer';

export default combineReducers({
  apps: AppsReducer
});
