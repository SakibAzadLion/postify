import { createStore, compose } from "redux";
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

store.subscribe(() => saveState(store.getState()));

export default store;
