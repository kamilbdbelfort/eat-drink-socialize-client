import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Review(props) {
  const { id, title, comment, rating, image, showLink } = props.review;

  return (
    <>
      <div style={{ width: "25%" }}></div>
      <Jumbotron className="Review-component">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{comment}</p>
        <p>I gave this place rating {rating}/5!</p>
        {showLink ? (
          <Link to={`/reviews/${id}`}>
            <Button>View the review...</Button>
          </Link>
        ) : null}
      </Jumbotron>
      <div style={{ width: "25%" }}></div>
    </>
  );
}
