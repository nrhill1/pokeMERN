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
        ...state,
        msg: action.payload.msg
      };
    case "RELEASE":
      return {
        ...state,
        pokemon: state.pokemon.filter(
          (pokemon) => pokemon._id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default pokeReducer;
