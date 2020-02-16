import { createStore, compose } from "redux";
import { throttle } from "lodash";
import { loadState, saveState } from "./localStorage";

//Import root reducer
import rootReducer from "./reducers/root";

const persistedState = loadState();

const defaultState = {
  posts: [],
  comments: {},
  likeDislike: {}
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(throttle(() => saveState(store.getState())), 1000);

export default store;
