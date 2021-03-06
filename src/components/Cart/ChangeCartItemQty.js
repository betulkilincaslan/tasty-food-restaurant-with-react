import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

const ChangeCartItemQty = ({ cartItem, actions }) => {
  // **********  Change menu item quantity ********** //
  const [quantity, setQuantity] = useState(cartItem.quantity);

  useEffect(() => {
    actions.addjustQuantity(cartItem.menuItem.id, quantity);
  }, [quantity, cartItem.menuItem.id, actions]);

  const increaseQuantity = () => {
    setQuantity(parseInt(quantity + 1));
    actions.addjustQuantity(cartItem.menuItem.id, quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(parseInt(quantity - 1));
    }
    actions.addjustQuantity(cartItem.menuItem.id, quantity);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => decreaseQuantity()}
        className="bg-yellow-400 p-3 rounded-lg cursor-pointer"
      >
        <FiMinus />
      </button>
      <span className="w-12 pl-4 p-2 bg-yellow-200 rounded-lg">{quantity}</span>
      <button
        onClick={() => increaseQuantity()}
        className="bg-yellow-400 p-3 rounded-lg cursor-pointer"
      >
        <FiPlus />
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addjustQuantity: bindActionCreators(
        cartActions.addjustQuantity,
        dispatch
      ),
    },
  };
}

export default connect(null, mapDispatchToProps)(ChangeCartItemQty);
