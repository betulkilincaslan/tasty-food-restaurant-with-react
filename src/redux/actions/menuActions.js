import * as actionTypes from "./actionTypes";

export function getMenuSuccess(menu) {
  return { type: actionTypes.GET_MENU_SUCCESS, payload: menu };
}

// **********  Getting menu from api ********** //
export function getMenu(category) {
  return function (dispatch) {
    let menuURL = `${process.env.REACT_APP_API_ENDPOINT}/menu`;
    if (category) {
      menuURL += "?category=" + category;
    }
    return fetch(menuURL)
      .then((response) => response.json())
      .then((result) => dispatch(getMenuSuccess(result)));
  };
}
