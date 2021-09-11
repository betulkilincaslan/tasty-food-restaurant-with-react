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
      className={"navbar " + (navbarBg ? navbarBg : "bg-green-800")}
    >
      <div>
        <Link className="nav-brand logo" to="/" onClick={toggleHome}>
          <span className="text-yellow-500">TASTY</span>&nbsp;FOOD
        </Link>
      </div>
      <div>
        <div className="block md:hidden" onClick={toggle}>
          <FaBars className="cursor-pointer hover:text-gray-200" size={30} />
        </div>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" activeclass="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-cart-link">
              <span>Cart</span>
              <span class="relative inline-block">
                <FaCartPlus size={20} />
                {cartCounter > 0 && (
                  <span className="nav-cart-counter">{cartCounter}</span>
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
