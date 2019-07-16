// state
import { initialState } from "../../data/initialState";

// types
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "../actions/category/categoryTypes";

/**
 * reducer
 *
 * This reducer changes the categories state of the application
 *
 * @param {Object} [state=categoriesInitialState]
 * @param action = categoriesActions
 *
 * @returns {Object} state
 */
const reducer = (state = initialState.categoriesInitialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.categories,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default reducer;

