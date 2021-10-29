import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
// export const SEARCHED_PLACES = "SEARCHED_PLACES";

export const fetchPlacesSuccess = (places) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});

export const fetchPlaces = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/places`);

    dispatch(fetchPlacesSuccess(response.data));
  };
};

// export function fetchedSearchedPlaces(places) {
//   return {
//     type: SEARCHED_PLACES,
//     payload: places,
//   };
// }

export const fetchPlacesUser = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/places/user/${id}`);

    dispatch(fetchPlacesSuccess(response.data));
  };
};

// export function fetchSearchedPlaces(text) {
//   return async function thunk(dispatch, getState) {
//     try {
//       const response = await axios.get(`${apiUrl}/search/${text}`);
//       dispatch(fetchedSearchedPlaces(response.data));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// }
