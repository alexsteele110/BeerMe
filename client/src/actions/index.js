import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_BEERS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBeers = () => async dispatch => {
  const res = await axios.get();
};
