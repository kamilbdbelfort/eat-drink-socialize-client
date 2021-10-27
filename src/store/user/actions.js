import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const FETCHED_USER_SUCCES = "FETCHED_USER_SUCCES";
export const USER_PLACE_DATA = "USER_PLACE_DATA";
export const LIKE_TRIGGED = "LIKE_TRIGGED";
export const SAVED_TRIGGED = "SAVED_TRIGGED";
export const ADD_NEW_USER_PLACE = "ADD_NEW_USER_PLACE";
export const USER_DATA = "USER_DATA";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

const userDataFetched = (userData) => ({
  type: USER_DATA,
  payload: userData,
});

const userPlaceDataFetched = (user_place_data) => ({
  type: USER_PLACE_DATA,
  payload: user_place_data,
});

const likeTrigged = (like) => ({
  type: LIKE_TRIGGED,
  payload: like,
});

const savedTrigged = (saved) => ({
  type: SAVED_TRIGGED,
  payload: saved,
});

const addedNewPlace = (data) => ({
  type: ADD_NEW_USER_PLACE,
  payload: data,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (
  name,
  email,
  password,
  birthday,
  street,
  number,
  city,
  postcode,
  country,
  image,
  instagram
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        birthday,
        street,
        number,
        city,
        postcode,
        country,
        image,
        instagram,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

// GET all info of a specific user
export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/users/${id}`);
      dispatch(userDataFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// GET user_place info aka user's liked & saved places
export const fetchUserPlace = (userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/users/user_place/${userId}/${placeId}`
      );

      dispatch(userPlaceDataFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// POST add a like for the first time
export const addNewLike = (userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/users/user_place/newLike`, {
        userId: userId,
        placeId: placeId,
        like: true,
        saved: false,
      });
      dispatch(addedNewPlace(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// POST add a saved for the first time
export const addNewSaved = (userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/users/user_place/newSaved`, {
        userId: userId,
        placeId: placeId,
        like: false,
        saved: true,
      });
      dispatch(addedNewPlace(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// PATCH unlike, like place
export const updateUserPlaceLike = (userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/users/user_place/${userId}/${placeId}/like`
      );
      console.log("liked actions", response.data);
      dispatch(likeTrigged(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// PATCH save, unsave place
export const updateUserPlaceSaved = (userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/users/user_place/${userId}/${placeId}/saved`
      );
      console.log("saved actions", response.data);
      dispatch(savedTrigged(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
