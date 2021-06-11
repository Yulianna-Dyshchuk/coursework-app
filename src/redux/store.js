import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categories } from "./reducers/categories/reducer";

const root = combineReducers({
  categories,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));
