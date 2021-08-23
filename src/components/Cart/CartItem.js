import { MdDeleteForever } from "react-icons/md";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

const CartItem = (props) => {
  const removeFromCart = (menuItem) => {
    props.actions.removeFromCart(menuItem);
    alertify.error(menuItem.name + " removed from cart", 2);
  };

  return (
    <ul className="md:pr-8">
      {props.cart.map((cartItem) => (
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
            <span className="text-sm">
              {cartItem.quantity} {cartItem.quantity > 1 ? "pieces" : "piece"}
            </span>
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
      ))}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
