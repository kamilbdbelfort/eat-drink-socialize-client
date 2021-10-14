import React, { useEffect } from "react";
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
      <div className="Page-layout ">
        <div className="Left-side-box"></div>
        <div className="Item-box">
          <div key={place.id}>
            <Place
              key={place.id}
              id={place.id}
              name={place.name}
              image={place.image}
              reviews={place.reviews}
              users={place.users}
              showLink={false}
            />

            <p>
              <b>
                <i>
                  {place.city}, {place.country}, {place.street} {place.number},
                  {place.postcode}
                </i>
              </b>
            </p>
          </div>
        </div>
        <div className="Right-side-box"></div>
      </div>
    </>
  );
}
