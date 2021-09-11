import { MdDeleteForever } from "react-icons/md";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import ChangeCartItemQty from "./ChangeCartItemQty";

const CartItem = ({ cartItem, actions }) => {
  // **********  Remove menu item from cart ********** //
  const removeFromCart = (menuItem) => {
    actions.removeFromCart(menuItem);
    alertify.error(menuItem.name + " removed from cart", 2);
  };

  return (
    <li
      data-aos="fade-up"
      key={cartItem.menuItem.id}
      className="cart-item-container"
    >
      <img
        src={cartItem.menuItem.image}
        alt="menuItem"
        className="w-32 h-32 rounded flex-shrink-0"
      />
      <div className="cart-item-desc">
        <h5 className="sm:pl-4 sm:w-52 selection:">{cartItem.menuItem.name}</h5>
        <ChangeCartItemQty cartItem={cartItem} />
        <h5 className="tracking-widest text-sm">
          ${cartItem.menuItem.price * cartItem.quantity}
        </h5>
        <button
          className="p-2"
          onClick={() => removeFromCart(cartItem.menuItem)}
        >
          <MdDeleteForever className="cart-item-delete-button" />
        </button>
      </div>
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
