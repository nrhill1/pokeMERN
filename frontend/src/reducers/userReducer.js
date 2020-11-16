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
        user: {...action.payload}
      }
    case "LOG_OUT":
      localStorage.clear()
      return {
        loggedIn: false,
        user: {}
      }
    default: return state
  }
}

export default userReducer