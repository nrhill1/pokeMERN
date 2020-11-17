import axios from "axios";
import { returnErrors } from "./errorActions.js";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: "USER_LOADING" });

  // Get token from localstorage
  const token = getState().authReducer.token;

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
    .get("http://localhost:5000/auth/user", config)
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
export const register = (userInfo) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify(userInfo);

  axios
    .post("http://localhost:5000/auth/register", body, config)
    .then((res) =>
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
};

// Login User
export const login = (userInfo) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify(userInfo);

  axios
    .post("http://localhost:5000/auth/login", body, config)
    .then((res) =>
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
};

// Logout User
export const logUserOut = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().authReducer.token;

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
