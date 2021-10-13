import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";

export const fetchPlacesSuccess = (places) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});

export const fetchPlaces = () => {
  return async (dispatch, getState) => {
    const placesCount = getState().places.length;
    const response = await axios.get(
      `${apiUrl}/places?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${placesCount}`
    );

    //console.log(response.data);
    dispatch(fetchPlacesSuccess(response.data));
  };
};
