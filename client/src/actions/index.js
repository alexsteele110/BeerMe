import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_BEERS } from './types';
const keys = require('../clientconfig/clientkeys');

const ROOT_URL = `http://api.brewerydb.com/v2/search?key=${keys.breweryKey}`;

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export function fetchBeers(beer) {
  const url = `${ROOT_URL}&type=beer&q=${beer}`;
  const res = axios.get(url);

  return {
    type: FETCH_BEERS,
    payload: res
  };
}
