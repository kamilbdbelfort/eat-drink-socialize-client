import { FETCH_PLACES_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return action.payload;
    // case SEARCHED_PLACES:
    //   return [...action.payload];
    default:
      return state;
  }
};
