import { FETCH_BEER_DETAILS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BEER_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
