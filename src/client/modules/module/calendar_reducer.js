export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'x':
      return {
        ...state,
        events: action.data,
      };
    default:
      return state;
  }
}
