import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Account from "./Account";

const Router = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Account} />
                <Route path="/user/:userId" component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;