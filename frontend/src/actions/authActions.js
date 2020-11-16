import axios from "axios";

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
      dispatchEvent({
        type: "AUTH_ERROR"
      });
    });
};
