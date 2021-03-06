import axios from "axios";
import { apiUrl } from "../../config/constants";

export const PLACE_DETAILS_FETCHED = "PLACE_DETAILS_FETCHED";

const placeDetailsFetched = (place) => ({
  type: PLACE_DETAILS_FETCHED,
  payload: place,
});

export const fetchPlaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/places/${id}`);
      dispatch(placeDetailsFetched(response.data));
    } catch (error) {
      console.log("Im in catch");
      console.log(error);
    }
  };
};
