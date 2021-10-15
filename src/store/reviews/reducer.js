import { FETCH_REVIEWS_SUCCESS, REVIEW_POSTED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_SUCCESS:
      return action.payload;
    case REVIEW_POSTED: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};
