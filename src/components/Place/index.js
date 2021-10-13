import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Place(props) {
  return (
    <>
      <div style={{ width: "10%" }}></div>
      <Jumbotron className="Place-component">
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
        <p>
          {props.street} {props.number}, {props.postcode}
        </p>
        <p>
          {props.city}, {props.country}
        </p>
        {props.showLink ? (
          <Link to={`/places/${props.id}`}>
            <Button>See more details...</Button>
          </Link>
        ) : null}
      </Jumbotron>
      <div style={{ width: "45%" }}></div>
    </>
  );
}
