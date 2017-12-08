import { FETCH_RESULTS, RECEIVE_RESULTS } from '../actions/types';

const initialState = {
  isFetching: false,
  fireRedirect: false,
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        isFetching: true,
        fireRedirect: true
      };
    case RECEIVE_RESULTS:
      return {
        ...state,
        isFetching: false,
        fireRedirect: false,
        data: action.payload
      };
    default:
      return state;
  }
}
