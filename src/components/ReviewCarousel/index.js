import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function StoryCarousel(props) {
  return (
    <Carousel className="mt-5">
      {props.place.reviews.map((review) => {
        return (
          <Carousel.Item key={review.id}>
            {review.imageUrl ? (
              <img
                className="d-block w-100"
                src={review.imageUrl}
                alt={review.name}
              />
            ) : null}
            <Carousel.Caption style={{}} className="p-5">
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
