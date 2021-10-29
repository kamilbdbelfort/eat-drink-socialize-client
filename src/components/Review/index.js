import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { showStars } from "../../functions";

export default function Review(props) {
  const { id, title, comment, rating, image, user, showLink } = props.review;

  console.log("review props", props.review);

  return (
    <>
      <div style={{ width: "25%" }}></div>
      <Jumbotron className="Review-component">
        <h4>
          {props.review.place.name} {showStars(rating)}
        </h4>
        <br />
        <h5>{title}</h5>
        <i>posted by {user.name}</i>
        <img src={image} alt={title} />
        <p>{comment}</p>
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
