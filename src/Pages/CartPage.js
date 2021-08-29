import { useEffect } from "react";
import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Cart/OrderSummary";
import { connect } from "react-redux";

const CartPage = ({ setNavbarBg, cart }) => {
  useEffect(() => {
    setNavbarBg("");
  }, []);

  return (
    <>
      <section className="mt-16">
        <div className="max-w-7xl sm:px-16 mx-auto mb-8">
          <div className="container mx-auto mt-24">
            <div className="flex flex-wrap justify-between mt-5 items-start text-gray-900">
              <div className="w-full mb-4 lg:mb-0 lg:w-2/3 flex flex-col flex-shrink-0">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.menuItem.id} cartItem={cartItem} />
                ))}
              </div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(CartPage);
