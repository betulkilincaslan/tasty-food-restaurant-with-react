import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchMenuReducer(
  state = initialState.searchQuery,
  action
) {
  let newState;
  switch (action.type) {
    case actionTypes.SEARCH_MENU:
      return (newState = action.payload);

    default:
      return state;
  }
}
