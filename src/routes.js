import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

import authorizationUtils from "./utils/authorizationUtils";

/** Import containers here */
import CategoriesDashboard from "./containers/category/CategoriesDashboard";
import ErrorComponent from "./containers/errors/ErrorComponent";

const routes = state => {
  /* https://tylermcginnis.com/react-router-protected-routes-authentication/ */
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authorizationUtils.isLoggedIn(state) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }/>
  );

  return (
    <App>
      <Switch>
        {/* PrivateRoutes */}
        <PrivateRoute
          exact
          path="/categories"
          component={CategoriesDashboard}
        />
        {/* Error Handling Routes */}
        <Route
          component={ErrorComponent}
        />
      </Switch>
    </App>
  );
};

export default routes;
