import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { fetchPlaces } from "../../store/places/actions";
import { selectPlaces } from "../../store/places/selectors";
import Place from "../../components/Place";

export default function Places() {
  const dispatch = useDispatch();
  const places = useSelector(selectPlaces);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <>
      <Container className="Places">
        {places.map((place) => {
          return (
            <div key={place.id} className="Place">
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
                showLink={true}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
}
