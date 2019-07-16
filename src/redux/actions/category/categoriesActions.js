// types
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "./categoryTypes";

// api calls
import { getStatusApi } from "../../../api/category";

/**
 * Get categories success action creator
 *
 * @param {categories[]} categories
 *
 * @returns {{categories: categories[], type: string}}
 */
export const getCategoriesSuccess = (categories) => ({
  categories,
  type: GET_CATEGORIES_SUCCESS
});

/**
 * Get categories failure action creator

 * @returns {{errors: *, type: string}}
 */
export const getCategoriesFailure = (errors) => ({
  errors,
  type: GET_CATEGORIES_FAILURE
});

/**
 * Thunk
 *
 * Makes an api call to get the categories
 *
 * @returns {Function} action type and payload
 */
export const getAssetCategories = () => dispatch => {
  debugger;
  return getStatusApi('http://locahost:8009/api/v1/categories')
    .then(response => {
      if (response.status === 200) {
        dispatch(getCategoriesSuccess(response.data));
      } else {
        dispatch(getCategoriesFailure(response.data));
      }
    })
    .catch(error => {
      throw error;
    });
};
