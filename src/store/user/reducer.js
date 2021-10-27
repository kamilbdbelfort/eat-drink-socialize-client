import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  USER_PLACE_DATA,
  LIKE_TRIGGED,
  SAVED_TRIGGED,
  ADD_NEW_USER_PLACE,
  USER_DATA,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  birthday: null,
  street: null,
  number: null,
  postcode: null,
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

    case USER_DATA:
      return { ...state, ...action.payload };

    case USER_PLACE_DATA:
      return { ...state, user_place: action.payload };

    case LIKE_TRIGGED:
      // console.log("the payload", action.payload);
      // console.log("the initial state", state);
      // const placeExists = state.places.find(
      //   (place) => parseInt(place.id) === parseInt(action.payload.placeId)
      // );
      // const updatedPlaces = placeExists ? state.places.map((place) => {
      //   console.log("the place", place);
      //   if (parseInt(place.id) !== parseInt(action.payload.placeId)) {
      //     return place;
      //   } else {
      //     return { ...action.payload };
      //   }
      // }): {...state.places, action.payload};
      // console.log("the updated places", updatedPlaces);
      return { ...state, user_place: { like: action.payload } };

    case SAVED_TRIGGED:
      return { ...state, user_place: { saved: action.payload } };

    case ADD_NEW_USER_PLACE:
      return { ...state, user_place: action.payload };

    default:
      return state;
  }
};
