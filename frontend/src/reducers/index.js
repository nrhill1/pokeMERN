import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import errorReducer from "./errorReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer
});

export default rootReducer;
