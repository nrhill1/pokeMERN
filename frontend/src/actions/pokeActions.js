import axios from "axios";
import { returnErrors } from "./errorActions.js";

export const addToTeam = (username, pokemon) => (dispatch, getState) => {
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

  const body = JSON.stringify({ username, pokemon });

  axios
    .post("http://localhost:5000/poke/add", body, config)
    .then((res) => {
      dispatch({
        type: "CATCH_SUCCESS",
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "CATCH_FAIL")
      );
      dispatch({
        type: "CATCH_FAIL"
      });
    });
};
