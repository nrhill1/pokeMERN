const initialState = {
  pokemon: [],
  isLoading: false,
  msg: null
};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATCH_POKE":
      return {
        ...state,
        pokemon: action.payload
      };
    case "CATCH_FAIL":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default pokeReducer;
