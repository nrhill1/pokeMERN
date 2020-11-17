import axios from "axios";
import { returnErrors } from "./errorActions.js";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: "USER_LOADING" });

  // Get token from localstorage
  const token = getState.auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .get("/api/auth/user", config)
    .then((res) =>
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR"
      });
    });
};

// Register User
export const register = { email, username, password };

// Logout User
export const logUserOut = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
