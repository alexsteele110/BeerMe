import {
  FETCH_RESULTS,
  RECEIVE_RESULTS,
  FETCH_LIST,
  RECEIVE_SUGGESTED_BEERS,
  RECEIVE_FAVORITE_BEERS,
  RECEIVE_BEER_REVIEWS
} from '../actions/types';

const initialState = {
  results: {
    isFetching: false,
    fireRedirect: false,
    data: []
  },
  suggested: [],
  favorites: [],
  reviews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: {
          isFetching: true,
          fireRedirect: true
        }
      };
    case FETCH_LIST:
      return {
        ...state,
        isFetching: true,
        fireRedirect: false
      };
    case RECEIVE_RESULTS:
      return {
        ...state,
        results: {
          isFetching: false,
          fireRedirect: false,
          data: action.payload
        }
      };
    case RECEIVE_SUGGESTED_BEERS:
      return {
        ...state,
        isFetching: false,
        fireRedirect: false,
        suggested: action.payload
      };
    case RECEIVE_FAVORITE_BEERS:
      return {
        ...state,
        isFetching: false,
        fireRedirect: false,
        favorites: action.payload
      };
    case RECEIVE_BEER_REVIEWS:
      return {
        ...state,
        isFetching: false,
        fireRedirect: false,
        reviews: action.payload
      };
    default:
      return state;
  }
}
