import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beersReducer from './beersReducer';
import detailsReducer from './detailsReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  beers: beersReducer,
  beerDetails: detailsReducer,
  form: reduxForm
});
