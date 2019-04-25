import api from "../api/fakeApi";
import { ROOMS_REQUEST, ROOMS_SUCCESS } from "../constants";

function fetchingRooms() {
  return {
    type: ROOMS_REQUEST
  };
}
function roomsSuccess(roomsList) {
  return {
    type: ROOMS_SUCCESS,
    payload: roomsList
  };
}

export function fetchRooms() {
  return dispatch => {
    dispatch(fetchingRooms());
    return api.fetchRooms().then(rooms => {
      console.log("rooms", rooms);
      dispatch(roomsSuccess(rooms));
    });
  };
}
