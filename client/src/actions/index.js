import axios from 'axios';
import { FETCH_USER, FETCH_BEERS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBeers = beer => async dispatch => {
  const res = await axios.get(`/api/search/${beer}`);
  console.log(res.data);
  dispatch({ type: FETCH_BEERS, payload: res.data });
};
