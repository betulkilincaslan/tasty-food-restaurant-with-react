import { useEffect } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as menuActions from "../../redux/actions/menuActions";
import * as cartActions from "../../redux/actions/cartActions";
import * as searchMenuActions from "../../redux/actions/searchMenuActions";

const MenuList = (props) => {
  useEffect(() => {
    props.actions.getMenu();
  }, []);

  const addToCart = (menuItem) => {
    props.actions.addToCart({ quantity: 1, menuItem });
    alertify.success(menuItem.name + " added to cart", 2);
  };

  // **********  Search menu item ********** //
  let filteredMenu = props.menu.filter((menuItem) => {
    return (
      menuItem.name.toLowerCase().indexOf(props.searchQuery.toLowerCase()) !==
      -1
    );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.actions.searchMenu("");
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="mb-8 h-16 flex justify-center items-center px-8"
      >
        <div className="flex items-center w-full sm:w-96 rounded-full overflow-x-hidden border-2 border-green-700 bg-gray-100 text-gray-800">
          <span className="text-lg pl-2 font-bold">
            <BiSearch />
          </span>
          <input
            onChange={(e) => props.actions.searchMenu(e.target.value)}
            value={props.searchQuery}
            type="search"
            placeholder="Search here"
            className="focus:outline-none flex-1 h-10 bg-transparent p-4 placeholder-gray-500 font-semibold text-lg"
          ></input>
        </div>
      </form>
      <div className="container grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-2">
        {filteredMenu.map((menuItem) => (
          <div
            key={menuItem.id}
            data-aos="fade-up"
            className="flex items-center justify-center"
          >
            <div className="max-w-sm mx-auto md:m-0 rounded overflow-hidden shadow-lg w-64 lg:w-72 transform hover:scale-105 motion-reduce:transform-none transition-all duration-300">
              <LazyLoadImage
                effect="blur"
                className="w-64 lg:w-72 h-72 bg-center"
                src={menuItem.image}
                alt="menu-item"
              />
              <div className="p-4 h-20">
                <div className="font-bold text-xl mb-2 text-center">
                  {menuItem.name}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="inline-flex items-center bg-gray-200 hover:bg-gray-300 px-4 text-sm font-semibold text-gray-700 transition-colors duration-300 cursor-pointer">
                  ${menuItem.price}
                </span>
                <button
                  className="bg-green-500 hover:bg-yellow-500 text-white p-3 transition-colors duration-300"
                  onClick={() => addToCart(menuItem)}
                >
                  <BiCart size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    menu: state.menuListReducer,
    searchQuery: state.searchMenuReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMenu: bindActionCreators(menuActions.getMenu, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      searchMenu: bindActionCreators(searchMenuActions.searchMenu, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
