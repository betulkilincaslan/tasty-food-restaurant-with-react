import { useEffect } from "react";
import CategoryListItem from "./CategoryListItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as menuActions from "../../redux/actions/menuActions";

const CategoryList = ({ currentCategory, categories, actions, toggleHome }) => {
  // **********  Getting categories  ********** //
  useEffect(() => {
    actions.getCategories();
  }, [actions]);

  // **********  Select and change category  ********** //
  const selectCategory = (category) => {
    actions.changeCategory(category);
    actions.getMenu(category.categoryName);
  };

  return (
    <aside
      style={{ zIndex: "999" }}
      className=" bg-green-800 bg-opacity-90 fixed left-0 right-0 top-16 h-16 p-4 text-center text-sm md:text-lg text-white uppercase sm:tracking-widest border-b-2 border-green-700"
    >
      <ul
        onClick={toggleHome}
        className="flex justify-center items-center gap-1 sm:gap-2 cursor-pointer"
      >
        {categories.map((category) => (
          <CategoryListItem
            key={category.categoryId}
            category={category}
            selectCategory={selectCategory}
            currentCategory={currentCategory}
          />
        ))}
      </ul>
    </aside>
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
