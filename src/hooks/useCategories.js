import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { SET_CATEGORIES, RST_CATEGORIES } from "../redux/reducers/categories/types";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);

  const set = (categories) => dispatch({ type: SET_CATEGORIES, categories });

  const reset = () => dispatch({ type: RST_CATEGORIES });

  const getColor = (category) => {
    try {
      return categories.find((item) => item.value.toLowerCase() === category.toLowerCase()).color;
    } catch (error) {
      return "orange";
    }
  };

  return { list: categories, set, reset, getColor };
};
