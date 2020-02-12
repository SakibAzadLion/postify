import { combineReducers } from "redux";
// import { routerReducer } from "ract-router-redux";

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({posts, comments});

export default rootReducer;