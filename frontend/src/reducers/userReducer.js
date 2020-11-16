const initialState = {
  loggedIn: false,
  isAuthenticated: false,
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_USER":
      return {
        loggedIn: true,
        isAuthenticated: true,
        user: {...action.payload}
      }
    case "LOG_OUT":
      localStorage.clear()
      return {
        loggedIn: false,
        isAuthenticated: true,
        user: {}
      }
    default: return state
  }
}

export default userReducer