import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Place from "../../components/Place";
import { fetchPlaceById } from "../../store/placeDetails/actions";
import { selectPlaceDetails } from "../../store/placeDetails/selectors";

export default function PlaceDetails() {
  const { id } = useParams();
  const place = useSelector(selectPlaceDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaceById(id));
  }, [dispatch, id]);

  return (
    <>
      <Container className="Places">
        <div key={place.id} className="Place-details">
          <Place
            key={place.id}
            id={place.id}
            name={place.name}
            street={place.street}
            number={place.number}
            city={place.city}
            postcode={place.postcode}
            country={place.country}
            image={place.image}
            showLink={false}
          />
        </div>
      </Container>
    </>
  );
}
