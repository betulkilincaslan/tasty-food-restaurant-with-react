import React from "react";

const CategoryListItem = ({ category, selectCategory, currentCategory }) => {
  return (
    <li
      onClick={() => selectCategory(category)}
      className={
        "category-list-item " +
        (category.categoryId === currentCategory.categoryId &&
          "category-active")
      }
    >
      {category.categoryName}
    </li>
  );
};

export default CategoryListItem;
