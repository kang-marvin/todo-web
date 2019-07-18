import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "./categoryTypes";
import { getStatusApi } from "../../../api/category";


/**
 * Get categories success action creator
 *
 * @param {{status, data}} categories
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

  const {status, data, message }= getStatusApi();

  if (status === 200) {
    return  dispatch(getCategoriesSuccess(data.categories));
  } else {
    return  dispatch(getCategoriesFailure(message));
  }
};
