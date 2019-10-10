import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./App";
import * as reducers from './state/reducers';

const allReducers = combineReducers({
  characterList: reducers.characterReducer,
});

const store = createStore(
  allReducers,
  {},
  compose(
    allReducers(thunk,),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Router>
    <Provider></Provider>
    <App />
  </Router>,
  document.getElementById("root")
);