import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import places from "./places/reducer";
import placeDetails from "./placeDetails/reducer";
import reviews from "./reviews/reducer";
import tags from "./tags/reducer";

export default combineReducers({
  appState,
  user,
  places,
  placeDetails,
  reviews,
  tags,
});
