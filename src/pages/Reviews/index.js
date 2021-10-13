import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { fetchReviews } from "../../store/reviews/actions";
import { selectReviews } from "../../store/reviews/selectors";
import Review from "../../components/Review";

export default function Places() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <>
      <Container className="Places">
        {reviews.map((review) => {
          return (
            <div key={review.id} className="Place">
              <Review key={review.id} review={review} showLink={true} />;
            </div>
          );
        })}
      </Container>
    </>
  );
}
