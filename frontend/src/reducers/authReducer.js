const initialState = {
  token: localStorage.getItem("token"),
  loggedIn: false,
  isLoading: false,
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "USER_LOADED":
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        user: { ...action.payload }
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        loggedIn: true,
        isLoading: false
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        token: null,
        loggedIn: false,
        isLoading: false,
        user: {}
      };
    default:
      return state;
  }
};

export default userReducer;
