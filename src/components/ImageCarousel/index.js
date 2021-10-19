import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import { selectReviews } from "../../store/reviews/selectors";
import { fetchReviewsByPlace } from "../../store/reviews/actions";

export default function ImagesCarousel(props) {
  const dispatch = useDispatch();
  const { id } = props.place;
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviewsByPlace(id));
  }, [dispatch, id]);

  return (
    <Carousel>
      {reviews.map((review) => {
        return (
          <Carousel.Item className="Carousel-item" key={review.id}>
            {review.image ? (
              <img
                className="Carousel-item-img"
                src={review.image}
                alt={review.title}
              />
            ) : null}
            <Carousel.Caption style={{}} className="p-5">
              <h3>{review.title}</h3>
              <p>{review.comment}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
