import { FETCH_BEER_DETAILS, RECEIVE_BEER_DETAILS } from '../actions/types';

const initialState = {
  data: {},
  isFetching: false,
  inFavorites: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEER_DETAILS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_BEER_DETAILS:
      const { data, inFavorites } = action.payload;
      return {
        ...state,
        isFetching: false,
        inFavorites,
        data
      };
    default:
      return state;
  }
}
