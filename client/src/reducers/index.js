import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beersReducer from './beersReducer';

export default combineReducers({
  auth: authReducer,
  beers: beersReducer
});
