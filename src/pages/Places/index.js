import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { fetchPlaces } from "../../store/places/actions";
import { fetchTags } from "../../store/tags/actions";
import { selectPlaces } from "../../store/places/selectors";
import { selectTags } from "../../store/tags/selectors";
import Place from "../../components/Place";

export default function Places() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const places = useSelector(selectPlaces);
  const tags = useSelector(selectTags);

  useEffect(() => {
    dispatch(fetchPlaces());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <div
        className={cx("searchbar", {
          "is-open": open,
        })}
      >
        <input
          type="text"
          className="search"
          placeholder="Search"
          onFocus={(e) => setOpen(true)}
          onBlur={(e) => setOpen(false)}
        />
        <div className="dropdown_positioner">
          <div className="dropdown">
            <ul>
              {tags.map((tag) => {
                return (
                  <div className="tag" key={tag.id}>
                    <li>
                      <strong>{tag.name}</strong>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="Page-layout ">
        <div className="Left-side-box"></div>
        <div className="Item-box">
          {places.map((place) => {
            return (
              <div
                className="Place"
                key={place.id}
                style={{ backgroundColor: "dark" }}
              >
                <Place
                  key={place.id}
                  id={place.id}
                  place={place.place}
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
