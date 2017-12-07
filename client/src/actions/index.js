import axios from 'axios';
import {
  FETCH_USER,
  FETCH_RESULTS,
  FETCH_LIST,
  RECEIVE_RESULTS,
  FETCH_BEER_DETAILS,
  RECEIVE_BEER_DETAILS,
  RECEIVE_SUGGESTED_BEERS,
  RECEIVE_FAVORITE_BEERS,
  RECEIVE_BEER_REVIEWS
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBeers = beer => async dispatch => {
  dispatch({ type: FETCH_RESULTS });

  const res = await axios.get(`/api/search/${beer}`);

  dispatch({ type: RECEIVE_RESULTS, payload: res.data });
};

export const fetchBeerDetails = beerId => async dispatch => {
  dispatch({ type: FETCH_BEER_DETAILS });

  const res = await axios.get(`/api/beer/${beerId}`);

  dispatch({ type: RECEIVE_BEER_DETAILS, payload: res.data });
};

export const fetchSuggestedBeers = styleId => async dispatch => {
  dispatch({ type: FETCH_LIST });

  const res = await axios.get(`/api/suggested/${styleId}`);

  dispatch({ type: RECEIVE_SUGGESTED_BEERS, payload: res.data });
};

export const submitReview = values => async dispatch => {
  const res = await axios.post('/api/reviews', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateFavorites = data => async dispatch => {
  const res = await axios.post('/api/favorites', data);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFavorites = () => async dispatch => {
  dispatch({ type: FETCH_LIST });

  const res = await axios.get('/api/favorites');

  dispatch({ type: RECEIVE_FAVORITE_BEERS, payload: res.data });
};

export const fetchBeerReviews = beerId => async dispatch => {
  dispatch({ type: FETCH_LIST });

  const res = await axios.get(`/api/reviews/${beerId}`);

  dispatch({ type: RECEIVE_BEER_REVIEWS, payload: res.data });
};
