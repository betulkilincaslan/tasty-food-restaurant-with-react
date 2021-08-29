import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem = state.find(
        (cartItem) => cartItem.menuItem.id === action.payload.menuItem.id
      );
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.menuItem.id === action.payload.menuItem.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.menuItem.id !== action.payload.id
      );
      return newState2;

    case actionTypes.ADJUST_QUANTITY:
      let newState3 = state.map((cartItem) => {
        if (cartItem.menuItem.id === action.payload.id) {
          return { ...cartItem, quantity: action.payload.quantity };
        }
        return cartItem;
      });
      return newState3;

    default:
      return state;
  }
}
