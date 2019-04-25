import { ROOMS_REQUEST, ROOMS_SUCCESS } from "../constants";

const rooms = (state = { list: [] }, action) => {
  switch (action.typs) {
    case ROOMS_REQUEST:
      return Object.assign({ isFetching: true }, state);
    case ROOMS_SUCCESS:
      return {
        list: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
export default rooms;
