import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../store/places/actions";
import { selectPlaces } from "../../store/places/selectors";
import Place from "../../components/Place";

export default function Places() {
  const dispatch = useDispatch();
  const places = useSelector(selectPlaces);
  console.log("places data:", places);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <>
      <div className="Page-layout ">
        <div className="Left-side-box"></div>
        <div className="Item-box">
          {places.map((place) => {
            return (
              <div className="item" key={place.id}>
                <Place
                  key={place.id}
                  id={place.id}
                  name={place.name}
                  image={place.image}
                  reviews={place.reviews}
                  users={place.users}
                  showLink={true}
                />
              </div>
            );
          })}
        </div>
        <div className="Right-side-box"></div>
      </div>
    </>
  );
}
