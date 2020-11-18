const initialState = {
  pokemon: [],
  isLoading: false
};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATCH_SUCCESS":
      return {
        ...state,
        pokemon: action.payload
      };
    default:
      return state;
  }
};

export default pokeReducer;
