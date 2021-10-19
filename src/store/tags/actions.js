import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";

export const fetchTagsSuccess = (tags) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: tags,
});

export const fetchTags = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/tags`);

    //console.log(response.data);
    dispatch(fetchTagsSuccess(response.data));
  };
};
