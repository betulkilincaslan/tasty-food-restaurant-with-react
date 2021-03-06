import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

// **********  Getting categories from api ********** //
export function getCategories() {
  return function (dispatch) {
    const categoryURL = `${process.env.REACT_APP_API_ENDPOINT}/categories`;
    return fetch(categoryURL)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
