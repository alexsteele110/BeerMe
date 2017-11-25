import { FETCH_BEER_DETAILS, RECEIVE_BEER_DETAILS } from '../actions/types';

const initialState = {
  info: {},
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEER_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BEER_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.payload
      });
    default:
      return state;
  }
}
