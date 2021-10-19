import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const REVIEW_POSTED = "REVIEW_POSTED";

export const fetchReviewsSuccess = (reviews) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const reviewPosted = (review) => ({
  type: REVIEW_POSTED,
  payload: review,
});

export const fetchReviews = () => {
  return async (dispatch, getState) => {
    const reviewsCount = getState().reviews.length;
    const response = await axios.get(
      `${apiUrl}/reviews?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${reviewsCount}`
    );
    dispatch(fetchReviewsSuccess(response.data));
  };
};

export const fetchReviewsByPlace = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/reviews/place/${id}`);
    dispatch(fetchReviewsSuccess(response.data));
  };
};

export const postReview = (title, comment, image, rating, userId, placeId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/reviews`, {
        title: title,
        comment: comment,
        image: image,
        rating: rating,
        userId: userId,
        placeId: placeId,
      });
      dispatch(reviewPosted(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
