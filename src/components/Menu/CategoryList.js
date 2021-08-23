import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as menuActions from "../../redux/actions/menuActions";

const CategoryList = (props) => {
  const { toggleHome } = props;

  useEffect(() => {
    props.actions.getCategories();
  }, []);

  const selectCategory = (category) => {
    props.actions.changeCategory(category);
    props.actions.getMenu(category.categoryName);
  };

  return (
    <>
      <aside
        style={{ zIndex: "999" }}
        className=" bg-green-800 bg-opacity-90 fixed left-0 right-0 top-16 h-16 p-4 text-center text-sm md:text-lg text-white uppercase sm:tracking-widest border-b-2 border-green-700"
      >
        <ul
          onClick={toggleHome}
          className="flex justify-center items-center gap-1 sm:gap-2 cursor-pointer"
        >
          {props.categories.map((category) => (
            <li
              onClick={() => selectCategory(category)}
              key={category.categoryId}
              className={
                "flex items-center justify-center h-10 md:w-44 rounded px-1 sm:px-3 text-white font-medium hover:text-green-900 md:hover:bg-yellow-400 transition-all duration-300 cursor-pointer " +
                (category.categoryId === props.currentCategory.categoryId &&
                  "category-active")
              }
            >
              {category.categoryName}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getMenu: bindActionCreators(menuActions.getMenu, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
