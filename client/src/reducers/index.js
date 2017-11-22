import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beersReducer from './beersReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
  auth: authReducer,
  beers: beersReducer,
  beerDetails: detailsReducer
});
