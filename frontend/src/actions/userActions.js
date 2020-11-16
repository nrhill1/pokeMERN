// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

// Methods

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:5000/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:5000/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};
