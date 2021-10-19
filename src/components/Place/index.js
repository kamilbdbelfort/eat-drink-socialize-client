import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Container } from "../OpenForm/Container";
import { selectUser } from "../../store/user/selectors";
import {
  addNewLike,
  addNewSaved,
  fetchUserPlace,
} from "../../store/user/actions";
import { postReview } from "../../store/reviews/actions";
import {
  updateUserPlaceLike,
  updateUserPlaceSaved,
} from "../../store/user/actions";

export default function Place(props) {
  const [url, setUrl] = useState("");
  const user = useSelector(selectUser);
  const [likeStatus, setLikeStatus] = useState();
  const [savedStatus, setSavedStatus] = useState();
  const placeRating = !props.reviews ? 0 : avgRating(props.reviews);
  const placeLikes = !props.users ? 0 : amountLikes(props.users);
  const placeSaved = !props.users ? 0 : amountSaved(props.users);
  const triggerText = "Give a review!";
  const dispatch = useDispatch();
  const likeIcon = ["💛", "🤍"];
  const savedIcon = ["✅", "🕵️"];

  const onSubmit = (event) => {
    event.preventDefault(event);
    const title = event.target.title.value;
    const comment = event.target.comment.value;
    const image = url;
    const rating = event.target.rating.value;
    dispatch(postReview(title, comment, image, rating, user.id, props.id));
  };

  useEffect(() => {}, [dispatch]);

  // like place function
  function likeTrigger() {
    fetchUserPlace(user.id, props.id);
    if (user.user_place.like === null || user.user_place.saved === null) {
      addNewLike(user.id, props.id);
    }
    user.user_place.like ? setLikeStatus(false) : setLikeStatus(true);
    dispatch(updateUserPlaceLike(user.id, props.id));
  }

  // save place function
  function savedTrigger() {
    fetchUserPlace(user.id, props.id);
    if (user.user_place.saved === null || user.user_place.like === null) {
      addNewSaved(user.id, props.id);
    }
    user.user_place.saved ? setSavedStatus(false) : setSavedStatus(true);
    dispatch(updateUserPlaceSaved(user.id, props.id));
  }

  return (
    <>
      <div style={{ width: "20%" }}></div>
      <Jumbotron className="Place-component">
        <h1>{props.name}</h1>
        <h3>
          {showStars(placeRating)} ({placeRating})
        </h3>
        <img src={props.image} alt={props.name} />
        <br />
        <button className="Button-place" onClick={likeTrigger}>
          {likeStatus ? likeIcon[1] : likeIcon[0]}
        </button>
        {placeLikes}{" "}
        <button className="Button-place" onClick={savedTrigger}>
          {savedStatus ? savedIcon[1] : savedIcon[0]}
        </button>
        {placeSaved}
        <span role="img" aria-label="Reviews">
          💬 {!props.reviews ? 0 : props.reviews.length}
        </span>
        <br />
        <br />
        <div>
          {props.showLink ? (
            <Link to={`/places/${props.id}`}>
              <Button>See more details...</Button>
            </Link>
          ) : null}
          {"   "}
          <Container
            triggerText={triggerText}
            onSubmit={onSubmit}
            url={url}
            setUrl={setUrl}
          />
        </div>
      </Jumbotron>
      <div style={{ width: "20%" }}></div>
    </>
  );
}

// calculate avarage rating
function avgRating(arrayReviews) {
  let sumRatings = 0;
  const amountReviews = arrayReviews.length;

  for (let x = 0; x < amountReviews; x++) {
    sumRatings += arrayReviews[x].rating;
  }
  const avgRating = Math.round(sumRatings / amountReviews, 2);
  return avgRating;
}

// show amount of fill stars
function showStars(avgRating) {
  if (1 > avgRating && avgRating >= 0) {
    return "☆☆☆☆☆";
  }
  if (2 > avgRating && avgRating >= 1) {
    return "★☆☆☆☆";
  }
  if (3 > avgRating && avgRating >= 2) {
    return "★★☆☆☆";
  }
  if (4 > avgRating && avgRating >= 3) {
    return "★★★☆☆";
  }
  if (5 > avgRating && avgRating >= 4) {
    return "★★★★☆";
  }
  if (avgRating === 5) {
    return "★★★★★";
  }
}

// show amount of likes
function amountLikes(arrayUsers) {
  let sumLikes = 0;
  const amountUsers = arrayUsers.length;

  for (let x = 0; x < amountUsers; x++) {
    if (arrayUsers[x].user_places.like) {
      sumLikes += 1;
    } else {
      return;
    }
  }
  return sumLikes;
}

// show amount of likes
function amountSaved(arrayUsers) {
  let sumSaved = 0;
  const amountUsers = arrayUsers.length;

  for (let x = 0; x < amountUsers; x++) {
    if (arrayUsers[x].user_places.saved) {
      sumSaved += 1;
    } else {
      return;
    }
  }
  return sumSaved;
}
