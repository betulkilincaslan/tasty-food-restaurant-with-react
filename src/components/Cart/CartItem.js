import { MdDeleteForever } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import alertify from "alertifyjs";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

const CartItem = ({ cartItem, actions }) => {
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

  const onChangeHandler = (e) => {
    setQuantity(e.target.value);
    actions.addjustQuantity(cartItem.menuItem.id, e.target.value);
  };

  // **********  Remove menu item from cart ********** //
  const removeFromCart = (menuItem) => {
    actions.removeFromCart(menuItem);
    alertify.error(menuItem.name + " removed from cart", 2);
  };

  return (
    <ul className="md:pr-8">
      <li
        data-aos="fade-up"
        key={cartItem.menuItem.id}
        className="flex flex-col gap-2 items-center justify-center sm:flex-row p-4 rounded-lg shadow-lg mb-2 font-semibold text-sm sm:text-lg"
      >
        <img
          src={cartItem.menuItem.image}
          alt="menuItem"
          className="w-32 h-32 rounded flex-shrink-0"
        />
        <div className="flex-grow flex flex-col gap-2 sm:flex-row items-center justify-center sm:justify-between">
          <p className="sm:pl-4 sm:w-52">{cartItem.menuItem.name}</p>
          <div className="flex items-center justify-center gap-2">
            <span
              onClick={() => decreaseQuantity()}
              className="bg-yellow-400 px-1 py-2 rounded-full cursor-pointer"
            >
              <FiMinus />
            </span>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={onChangeHandler}
              className="w-12 p-2 bg-yellow-200 rounded-md opacity-90 outline-none"
            ></input>
            <span
              onClick={() => increaseQuantity()}
              className="bg-yellow-400 px-1 py-2 rounded-full cursor-pointer"
            >
              <FiPlus />
            </span>
          </div>
          <p className="tracking-widest text-sm">
            ${cartItem.menuItem.price * cartItem.quantity}
          </p>
          <button
            className="p-2"
            onClick={() => removeFromCart(cartItem.menuItem)}
          >
            <MdDeleteForever className="text-red-600 hover:text-red-700 transition-colors duration-300 w-8 h-6" />
          </button>
        </div>
      </li>
    </ul>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      addjustQuantity: bindActionCreators(
        cartActions.addjustQuantity,
        dispatch
      ),
    },
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
