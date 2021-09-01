import React from "react";
// import { Link } from "react-router-dom";
import alertify from "alertifyjs";
// import { FiEye } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as viewCurrentItemActions from "../../redux/actions/viewCurrentItemActions";
import * as cartActions from "../../redux/actions/cartActions";

const MenuListItem = ({ menuItem, actions }) => {
  const addToCart = (menuItem) => {
    actions.addToCart({ quantity: 1, menuItem });
    alertify.success(menuItem.name + " added to cart", 2);
  };

  return (
    <div key={menuItem.id} className="flex items-center justify-center">
      <div className="max-w-sm mx-auto md:m-0 rounded overflow-hidden shadow-lg w-64 lg:w-72 transform hover:scale-105 motion-reduce:transform-none transition-all duration-300 flex flex-col gap-4">
        <LazyLoadImage
          effect="blur"
          className="w-64 lg:w-72 h-72 bg-center"
          src={menuItem.image}
          alt="menu-item"
        />

        <div className="font-bold text-xl text-center">{menuItem.name}</div>
        <div className="flex items-center justify-center"></div>
        <div className="flex justify-between">
          <div className="inline-flex items-center bg-gray-200 hover:bg-gray-300 p-2 text-sm font-semibold text-gray-700 transition-colors duration-300 cursor-pointer w-1/2 select-none">
            Price : $ {menuItem.price}
          </div>
          {/* <Link to={`/menu/${menuItem.id}`}> */}
          <button
            className="bg-green-500 hover:bg-yellow-500 text-white p-3 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 select-none w-1/2"
            onClick={() => addToCart(menuItem)}
          >
            <FaCartPlus size={30} />
            <span className="font-semibold uppercase">Add</span>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // viewCurrentItem: bindActionCreators(
      //   viewCurrentItemActions.viewCurrentItem,
      //   dispatch
      // ),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(MenuListItem);
