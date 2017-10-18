import { FETCH_BEERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BEERS:
      return action.payload;
    default:
      return state;
  }
}
