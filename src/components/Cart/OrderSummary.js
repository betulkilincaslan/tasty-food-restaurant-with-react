import { connect } from "react-redux";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = ({ cart }) => {
  const emptyCartMessage = "Empty Cart";

  // **********  Total price of Cart Items ********** //
  let initialValue = 0;
  let totalPrice = cart.reduce(
    (accumulator, cartItem) =>
      accumulator + cartItem.menuItem.price * cartItem.quantity,
    initialValue
  );

  return (
    <aside className="w-full mb-6 lg:mb-0 lg:w-1/3 px-4 lg:sticky top-24">
      <div className="flex-grow rounded-lg overflow-hidden shadow-lg bg-green-600 bg-opacity-60  px-4">
        <div className="px-6 mb-2 flex items-center justify-center">
          <p className="text-black text-center py-4 font-bold text-2xl">
            {cart.length > 0 ? "Order Summary" : emptyCartMessage}
          </p>
        </div>
        <div className="font-semibold">
          {cart.map((cartItem) => (
            <OrderSummaryItem key={cartItem.menuItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="flex items-center justify-between my-4">
          <span className=" font-bold">Total</span>
          <span className="text-sm tracking-widest font-semibold">
            ${totalPrice}
          </span>
        </div>

        <div className="mb-8">
          <div className="w-full px-6">
            <button className="confirm-cart-button">Confirm Cart</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(OrderSummary);
