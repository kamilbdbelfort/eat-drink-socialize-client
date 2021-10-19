import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";

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

export const fetchPlacesUser = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/places/user/${id}`);

    dispatch(fetchPlacesSuccess(response.data));
  };
};
