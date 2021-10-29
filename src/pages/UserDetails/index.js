import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Place from "../../components/Place";
import UserCard from "../../components/UserCard";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectPlaces } from "../../store/places/selectors";
import { fetchPlacesUser } from "../../store/places/actions";

export default function UserDetails() {
  const user = useSelector(selectUser);
  const places = useSelector(selectPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken);
    dispatch(fetchPlacesUser(user.id));
  }, [dispatch, user.id]);

  return (
    <>
      <div className="Page-layout">
        <div className="Left-side-box">
          {!user ? null : (
            <UserCard
              image={user.image}
              name={user.name}
              birthday={user.birthday}
              city={user.city}
              country={user.country}
              createdAt={user.createdAt}
              instagram={user.instagram}
            />
          )}
        </div>
        <div className="Item-box">
          {!places
            ? null
            : places.map((place) => {
                return (
                  <div key={place.id}>
                    <Place
                      key={place.id}
                      id={place.id}
                      name={place.name}
                      image={place.image}
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
