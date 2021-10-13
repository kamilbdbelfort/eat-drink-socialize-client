// src/components/UserCard.js
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function UserCard(props) {
  const { image, name, birthday, city, country, createdAt, instagram } = props;

  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthday);

  var initalDate = new Date(createdAt);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Age: {age}</ListGroupItem>
          <ListGroupItem>
            Location: {city}, {country}
          </ListGroupItem>
          <ListGroupItem>Joined: {initalDate.toDateString()}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={instagram}>Instagram</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
