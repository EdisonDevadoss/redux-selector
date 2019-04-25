import { combineReducers } from "redux";
import auth from "./auth";
import rooms from "./rooms";

const reducers = combineReducers({
  auth,
  rooms
});
export default reducers;
