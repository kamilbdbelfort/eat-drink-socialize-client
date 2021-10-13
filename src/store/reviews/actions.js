import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";

export const fetchReviewsSuccess = (reviews) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviews = () => {
  return async (dispatch, getState) => {
    const reviewsCount = getState().reviews.length;
    const response = await axios.get(
      `${apiUrl}/reviews?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${reviewsCount}`
    );

    console.log(response.data);
    dispatch(fetchReviewsSuccess(response.data));
  };
};
