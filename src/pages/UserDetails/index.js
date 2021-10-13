import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

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

  console.log("user", user);

  return (
    <>
      <Container className="UserCard">
        <Container>
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
        </Container>
        <Container>
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
        </Container>
        <Container></Container>
      </Container>
    </>
  );
}
