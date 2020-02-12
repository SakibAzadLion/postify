import { createStore, compose } from "redux";
// import { syncHistoryWithStore } from "react-router-redux";
// import { browerHistory } from "react-router";

//Import root reducer
import rootReducer from "./reducers/root";

const defaultState = {
    posts: [],
    comments: {}
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// export const history = syncHistoryWithStore(browerHistory, store);

export default store;