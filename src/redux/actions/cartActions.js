import * as actionTypes from "./actionTypes";

// **********  Adding menu item to cart ********** //
export function addToCart(menuItem) {
  return { type: actionTypes.ADD_TO_CART, payload: menuItem };
}

// **********  Remove menu item from cart ********** //
export function removeFromCart(cartItem) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: cartItem };
}

export function addjustQuantity(menuItemID, value) {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: { id: menuItemID, quantity: value },
  };
}
