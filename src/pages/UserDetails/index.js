import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Place from "../../components/Place";
import UserCard from "../../components/UserCard";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function UserDetails() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken);
  }, [dispatch]);

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
          {!user.places
            ? null
            : user.places.map((place) => {
                return (
                  <div key={place.id}>
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
        </div>
        <div className="Right-side-box"></div>
      </div>
    </>
  );
}
