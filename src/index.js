import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./tools/serviceWorker";
import configureStore from "./redux/store/configureStore";
import { saveState } from "./utils/localStorageUtils";

/** Import CDN css files here */

import routes from "./routes";
// import "./css/index.css";

require("dotenv").config();

const store = configureStore();

store.subscribe(() => {
  saveState({
    /** Save authentication to localStorage */
    authentication: ''
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes(store.getState())}</Router>
  </Provider>,
  document.getElementById("root")
);

module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
