import { combineReducers } from "redux";
// import { routerReducer } from "ract-router-redux";

import posts from "./posts";
import comments from "./comments";
import likeDislike from "./likeDislike";

const rootReducer = combineReducers({ posts, comments, likeDislike });

export default rootReducer;
