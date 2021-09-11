import React from "react";
import alertify from "alertifyjs";
import { FaCartPlus } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

const MenuListItem = ({ menuItem, actions }) => {
  const addToCart = (menuItem) => {
    actions.addToCart({ quantity: 1, menuItem });
    alertify.success(menuItem.name + " added to cart", 2);
  };

  return (
    <div key={menuItem.id} className="flex items-center justify-center">
      <div className="menu-list-item-container">
        <LazyLoadImage
          effect="blur"
          className="w-64 lg:w-72 h-72 bg-center"
          src={menuItem.image}
          alt="menu-item"
        />

        <div className="font-bold text-xl text-center">{menuItem.name}</div>
        <div className="flex justify-between">
          <div className="menu-list-item-price">Price : $ {menuItem.price}</div>
          <button
            className="menu-list-item-button"
            onClick={() => addToCart(menuItem)}
          >
            <FaCartPlus size={30} />
            <span className="font-semibold uppercase">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(MenuListItem);
