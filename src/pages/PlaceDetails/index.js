import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Place from "../../components/Place";
import ImagesCarousel from "../../components/ImageCarousel";
import { fetchPlaceById } from "../../store/placeDetails/actions";
import { selectPlaceDetails } from "../../store/placeDetails/selectors";

export default function PlaceDetails() {
  const { id } = useParams();
  const place = useSelector(selectPlaceDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaceById(id));
  }, [dispatch]);
  return (
    <>
      <div className="Place-Details ">
        <div className="Left-side-box">
          <Card className="PlaceCard">
            <Card.Body>
              <div key={place.id}>
                <Place
                  key={place.id}
                  id={place.id}
                  place={place}
                  name={place.name}
                  image={place.image}
                  reviews={place.reviews}
                  users={place.users}
                  showLink={false}
                />
              </div>
            </Card.Body>
            <ListGroup className="ListGroup">
              <ListGroupItem>
                <i>City:</i>{" "}
                <b>
                  {place.city}, {place.country}
                </b>
              </ListGroupItem>
              <ListGroupItem>
                <i>Address:</i>{" "}
                <b>
                  {place.street} {place.number}, {place.postcode}
                </b>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="Item-box">
          <ImagesCarousel className="Carousel-box" place={place} />
        </div>
      </div>
    </>
  );
}
