import { RST_CATEGORIES, SET_CATEGORIES } from "./types";

const initialState = [];

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return [ ...action.categories ];
    case RST_CATEGORIES:
      return [];
    default:
      return state;
  }
};
