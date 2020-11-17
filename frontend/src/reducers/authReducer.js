const initialState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: { ...action.payload }
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoading: false
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        isLoading: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
