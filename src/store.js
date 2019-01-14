import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from 'react-router-redux'
import { createHashHistory } from 'history'

import rootReducer from "./root.reducer";

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancerList.push(devToolsExtension());
}

const middleWares = [thunkMiddleware, routerMiddleware(createHashHistory())];

const composedEnhancer = compose(
  applyMiddleware(...middleWares),
  ...enhancerList
);

export default createStore(rootReducer, {}, composedEnhancer);
