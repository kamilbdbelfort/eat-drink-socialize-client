import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/reviews/actions";
import { selectReviews } from "../../store/reviews/selectors";
import Review from "../../components/Review";

export default function Reviews() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <>
      <div className="Page-layout">
        <div className="Left-side-box"></div>
        <div className="Item-box">
          {reviews.map((review) => {
            return (
              <div className="item" key={review.id}>
                <Review key={review.id} review={review} showLink={true} />
              </div>
            );
          })}
        </div>
        <div className="Right-side-box"></div>
      </div>
    </>
  );
}
