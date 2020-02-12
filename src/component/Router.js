import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Main from "./Main";
import Account from "./Account";
import store from "../store";

const Router = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Account} />
          <Route path="/user/:userId" component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
