import React from "react";

const CategoryListItem = ({ category, selectCategory, currentCategory }) => {
  return (
    <li
      onClick={() => selectCategory(category)}
      className={
        "flex items-center justify-center h-10 md:w-44 rounded px-1 sm:px-3 text-white font-medium hover:text-green-900 md:hover:bg-yellow-400 transition-all duration-300 cursor-pointer " +
        (category.categoryId === currentCategory.categoryId &&
          "category-active")
      }
    >
      {category.categoryName}
    </li>
  );
};

export default CategoryListItem;
