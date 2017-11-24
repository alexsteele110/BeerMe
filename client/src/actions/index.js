import axios from 'axios';
import {
  FETCH_USER,
  FETCH_BEERS,
  RECEIVE_BEERS,
  FETCH_BEER_DETAILS
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
  const res = await axios.get(`/api/beer/${beerId}`);

  dispatch({ type: FETCH_BEER_DETAILS, payload: res.data });
};
