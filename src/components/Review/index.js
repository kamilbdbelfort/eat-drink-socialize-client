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
      <div style={{ width: "10%" }}></div>
      <Jumbotron className="Review-component">
        <h2>
          {/* {place.name} */} {showStars(rating)}
        </h2>
        <br />
        <h3>{title}</h3>
        <br />
        <img src={image} alt={title} />
        <br />
        <br />
        <h4>{comment}</h4>
        <br />
        <h6>
          <i>posted by {user.name}</i>
        </h6>
        {showLink ? (
          <Link to={`/reviews/${id}`}>
            <Button>View the review...</Button>
          </Link>
        ) : null}
      </Jumbotron>
      <div style={{ width: "10%" }}></div>
    </>
  );
}
