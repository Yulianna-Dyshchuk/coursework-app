import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(combineReducers({ categories: () => ([]) }));

export const MockReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
