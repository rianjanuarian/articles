import { combineReducers } from "redux";

import articles from "./articles";
import users from "./users";

export default combineReducers({
  users,
  articles,
});
