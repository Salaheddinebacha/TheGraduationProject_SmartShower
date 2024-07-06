const initialState = {
  currentPage: "PAGE2",
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
