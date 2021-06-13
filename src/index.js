import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import combineReducer from "./reducers/reducerIndex";
import App from "./rootComponent/App";

const store = createStore(combineReducer, applyMiddleware(thunk));

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
