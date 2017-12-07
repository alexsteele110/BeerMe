import {
  FETCH_SUGGESTED_BEERS,
  RECEIVE_SUGGESTED_BEERS
} from '../actions/types';

const initialState = {
  items: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUGGESTED_BEERS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SUGGESTED_BEERS:
      return {
        ...state,
        isFetching: false,
        items: action.payload
      };
    default:
      return state;
  }
}
