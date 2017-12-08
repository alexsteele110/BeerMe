export default function listWithType(category = '') {
  return function(state = { isFetching: false, data: [] }, action) {
    switch (action.type) {
      case `fetch-${category}`:
        return {
          ...state,
          isFetching: true
        };
      case `receive-${category}`:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      default:
        return state;
    }
  };
}
