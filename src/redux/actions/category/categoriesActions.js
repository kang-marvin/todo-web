import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "./categoryTypes";

import { getStatusApi } from "../../../api/category";

/**
 * Get categories success action creator
 *
 * @param {categories[]} categories
 *
 * @returns {{categories: categories[], type: string}}
 */
export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories
});

/**
 * Get categories failure action creator

 * @returns {{errors: *, type: string}}
 */
export const getCategoriesFailure = (errors) => ({
  type: GET_CATEGORIES_FAILURE,
  errors
});

/**
 * Thunk
 *
 * Makes an api call to get the categories
 *
 * @returns {Function} action type and payload
 */
export const getAssetCategories = () => dispatch => {
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
