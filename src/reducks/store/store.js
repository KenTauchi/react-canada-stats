import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { DataSetReducer } from "../dataSet/reducers";

import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      dataSet: DataSetReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
