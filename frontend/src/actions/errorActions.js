// Return Errors Method
export const returnErrors = (msg, status, id = null) => {
  return {
    type: "GET_ERRORS",
    payload: { msg, status, id }
  };
};

// Clear Errors Method
export const clearErrors = () => {
  return {
    type: "CLEAR_ERRORS"
  };
};
