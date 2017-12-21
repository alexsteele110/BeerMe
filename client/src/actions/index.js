import axios from 'axios';
import {
  FETCH_USER,
  FETCH_RESULTS,
  FETCH_SUGGESTED,
  FETCH_FAVORITES,
  FETCH_REVIEWS,
  FETCH_MY_REVIEWS,
  FETCH_BEER_DETAILS,
  RECEIVE_RESULTS,
  RECEIVE_BEER_DETAILS,
  RECEIVE_SUGGESTED,
  RECEIVE_FAVORITES,
  RECEIVE_REVIEWS,
  RECEIVE_MY_REVIEWS
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
  dispatch({ type: FETCH_SUGGESTED });

  const res = await axios.get(`/api/suggested/${styleId}`);

  dispatch({ type: RECEIVE_SUGGESTED, payload: res.data });
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
  dispatch({ type: FETCH_FAVORITES });

  const res = await axios.get('/api/favorites');

  dispatch({ type: RECEIVE_FAVORITES, payload: res.data });
};

export const fetchBeerReviews = beerId => async dispatch => {
  dispatch({ type: FETCH_REVIEWS });

  const res = await axios.get(`/api/reviews/${beerId}`);

  dispatch({ type: RECEIVE_REVIEWS, payload: res.data });
};

export const fetchMyReviews = () => async dispatch => {
  dispatch({ type: FETCH_MY_REVIEWS });

  const res = await axios.get('/api/reviews');

  dispatch({ type: RECEIVE_MY_REVIEWS, payload: res.data });
};

export const fetchAllReviews = () => async dispatch => {
  dispatch({ type: FETCH_REVIEWS });

  const res = await axios.get('/api/allReviews');

  dispatch({ type: RECEIVE_REVIEWS, payload: res.data });
};

export const fetchRecentReviews = () => async dispatch => {
  dispatch({ type: FETCH_REVIEWS });

  const res = await axios.get('/api/recentReviews');

  dispatch({ type: RECEIVE_REVIEWS, payload: res.data });
};

export const updateHelpful = reviewId => async dispatch => {
  const res = await axios.post(`/api/reviews/${reviewId}`);

  dispatch({ type: FETCH_USER, payload: res.data });
};
