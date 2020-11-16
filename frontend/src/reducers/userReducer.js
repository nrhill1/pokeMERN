const initialState = {
  token: localStorage.getItem("token"),
  loggedIn: false,
  isLoading: false,
  user: null
};

const isEmpty = require("is-empty");

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "SET_USER":
      return {
        ...state,
        loggedIn: !isEmpty(action.payload),
        isLoading: false,
        user: { ...action.payload }
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        token: null,
        loggedIn: false,
        isLoading: false,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
