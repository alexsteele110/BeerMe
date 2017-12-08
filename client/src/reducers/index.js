import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listWithType from './listsReducer';
import detailsReducer from './detailsReducer';
import searchReducer from './searchReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  suggested: listWithType('suggested'),
  favorites: listWithType('favorites'),
  reviews: listWithType('reviews'),
  beerDetails: detailsReducer,
  results: searchReducer,
  form: reduxForm
});
