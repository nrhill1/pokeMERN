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
    case "RELEASE":
      return {
        ...state,
        pokemon: state.pokemon.filter(
          (pokemon) => pokemon._id !== action.payload
        )
      };
    case "RELEASE_FAIL":
    case "CATCH_FAIL":
      return {
        ...state,
        msg: action.payload
      };
    default:
      return state;
  }
};

export default pokeReducer;
