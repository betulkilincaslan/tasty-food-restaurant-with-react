import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";

const Navbar = ({ toggle, toggleHome, navbarBg, cart }) => {
  useEffect(() => {}, [navbarBg]);

  // **********  Cart Counter ********** //
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((cartItem) => {
      count += cartItem.quantity;
    });
    setCartCounter(count);
  }, [cart, cartCounter]);

  return (
    <nav
      style={{ zIndex: "9990" }}
      className={
        "w-full h-16 flex justify-between items-center fixed top-0 left-0 py-4 px-12 shadow-sm uppercase tracking-widest font-bold text-white " +
        (navbarBg ? navbarBg : "bg-green-800")
      }
    >
      <div>
        <Link
          className="text-xl md:text-2xl logo tracking-widest"
          to="/"
          onClick={toggleHome}
        >
          <span className="text-yellow-500">TASTY</span>&nbsp;FOOD
        </Link>
      </div>
      <div>
        <div className="block md:hidden" onClick={toggle}>
          <FaBars className="cursor-pointer hover:text-gray-200" size={30} />
        </div>
        <ul className="md:flex md:flex-row gap-6 flex-1 static text-left hidden">
          <li>
            <Link
              className="text-lg transform hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
              activeclass="active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-lg transform hover:text-yellow-400  transition-colors duration-300 cursor-pointer"
              to="/menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className="text-lg transform hover:text-yellow-400  transition-colors duration-300 cursor-pointer"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex gap-2 items-center justify-center text-lg transform hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              <span>Cart</span>
              <span class="relative inline-block">
                <FaCartPlus size={20} />
                {cartCounter > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-50 transform translate-x-6 -translate-y-5 bg-red-600 rounded-full">
                    {cartCounter}
                  </span>
                )}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(Navbar);
