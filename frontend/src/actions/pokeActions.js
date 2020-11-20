import axios from "axios";
import { returnErrors } from "./errorActions.js";
import { tokenConfig } from "./authActions.js";

export const addToTeam = (username, pokemon) => (dispatch, getState) => {
  const body = JSON.stringify({ username, pokemon });

  axios
    .put("http://localhost:5000/poke/add", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "CATCH_POKE",
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

export const delFromTeam = (username, id) => (dispatch, getState) => {
  const body = JSON.stringify({ username, id });

  axios
    .put("http://localhost:5000/poke/del", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "RELEASE",
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "RELEASE_FAIL")
      );
      dispatch({
        type: "RELEASE_FAIL"
      });
    });
};
