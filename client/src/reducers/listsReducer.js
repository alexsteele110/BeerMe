export default function listWithType(category = '') {
  const initialState = {
    isFetching: false,
    data: []
  };

  return function(state = initialState, action) {
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
