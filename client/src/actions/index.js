import axios from 'axios';
import {
  FETCH_USER,
  FETCH_BEERS,
  RECEIVE_BEERS,
  FETCH_BEER_DETAILS,
  RECEIVE_BEER_DETAILS,
  FETCH_SUGGESTED_BEERS,
  RECEIVE_SUGGESTED_BEERS
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBeers = beer => async dispatch => {
  dispatch({ type: FETCH_BEERS });

  const res = await axios.get(`/api/search/${beer}`);

  dispatch({ type: RECEIVE_BEERS, payload: res.data });
};

export const fetchBeerDetails = beerId => async dispatch => {
  dispatch({ type: FETCH_BEER_DETAILS });

  const res = await axios.get(`/api/beer/${beerId}`);

  dispatch({ type: RECEIVE_BEER_DETAILS, payload: res.data });
};

export const fetchSuggestedBeers = styleId => async dispatch => {
  dispatch({ type: FETCH_SUGGESTED_BEERS });

  const res = await axios.get(`/api/suggested/${styleId}`);

  dispatch({ type: RECEIVE_SUGGESTED_BEERS, payload: res.data });
};

export const submitReview = values => async dispatch => {
  const res = await axios.post('/api/reviews', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};
