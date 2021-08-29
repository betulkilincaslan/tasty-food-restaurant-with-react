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
        "w-full h-16 flex justify-between items-center fixed top-0 left-0 py-4 px-10 shadow-sm uppercase tracking-widest font-bold text-white " +
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
              className={
                "flex gap-2 items-center justify-center text-lg transform hover:text-yellow-400 transition-colors duration-300 cursor-pointer " +
                (cartCounter > 0 ? "bg-green-600 px-4 rounded-full" : "")
              }
            >
              <span>Cart</span>
              <FaCartPlus size={20} />
              {cartCounter > 0 && <span>{cartCounter}</span>}
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
