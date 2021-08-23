import * as actionTypes from "./actionTypes";

// **********  Search menu item ********** //
export function searchMenu(value) {
  return { type: actionTypes.SEARCH_MENU, payload: value };
}
