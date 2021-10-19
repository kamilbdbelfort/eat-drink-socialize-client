// src/functions.js

export const showStars = (avgRating) => {
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
};
