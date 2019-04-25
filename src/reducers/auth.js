import { AUTH_REQUEST, AUTH_SUCCESS } from "../constants";

const auth = (state = { user: {} }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({ isFetching: true }, state);
    case AUTH_SUCCESS:
      return {
        user: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default auth;
