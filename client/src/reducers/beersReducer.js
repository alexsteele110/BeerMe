import { FETCH_BEERS, RECEIVE_BEERS } from '../actions/types';

const initialState = {
  items: [],
  isFetching: false,
  fireRedirect: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        ...state,
        isFetching: true,
        fireRedirect: true
      };
    case RECEIVE_BEERS:
      return {
        ...state,
        isFetching: false,
        fireRedirect: false,
        items: action.payload
      };
    default:
      return state;
  }
}
