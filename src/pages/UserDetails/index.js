import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function UserDetails() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken);
  }, [dispatch]);

  console.log("user info", user);

  return (
    <>
      <div className="Places">
        {/* <div key={place.id} className="Place-details">
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
        </div> */}
      </div>
    </>
  );
}
