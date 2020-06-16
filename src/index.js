import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase";

import App from "./App";
import firebaseConfig from "./configFirebase";
import rootReducer from "./reducers";

import * as serviceWorker from "./serviceWorker";

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, { userProfile: "users" })
)(createStore);

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
