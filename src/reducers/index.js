import { combineReducers } from "redux";
import auth, * as fromAuth from "./auth";
import { createSelector } from "reselect";
import rooms from "./rooms";

const reducers = combineReducers({
  auth,
  rooms
});
export const selectUserName = state => fromAuth.selectUserName(state.auth);

export const selectUserReservation = state => state.auth.user.reservation;

export const selectRoomList = state => state.rooms.list;

export const selectUserRoom = createSelector(
  selectUserReservation,
  selectRoomList,
  (userReservation, roomList) =>
    roomList.find(room => room.id === userReservation.roomType)
);

// export const selectUserRoom = state => {
//   const userReservation = state.auth.user.reservation;
//   const roomList = state.rooms.list;
//   return roomList.find(room => room.id === userReservation.roomType);
// };
export default reducers;
