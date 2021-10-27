import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  USER_PLACE_DATA,
  LIKE_TRIGGED,
  SAVED_TRIGGED,
  ADD_NEW_USER_PLACE,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  birthday: null,
  city: null,
  country: null,
  image: null,
  reviews: [],
  user_place: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case USER_PLACE_DATA:
      return { ...state, user_place: action.payload };

    case LIKE_TRIGGED:
      return { ...state, user_place: { like: action.payload } };

    case SAVED_TRIGGED:
      return { ...state, user_place: { saved: action.payload } };

    case ADD_NEW_USER_PLACE:
      return { ...state, user_place: action.payload };

    default:
      return state;
  }
};
