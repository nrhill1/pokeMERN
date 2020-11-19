import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
import pokeReducer from "./pokeReducer.js";

const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  pokeReducer
});

export default rootReducer;
