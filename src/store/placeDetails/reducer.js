import { PLACE_DETAILS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PLACE_DETAILS_FETCHED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
