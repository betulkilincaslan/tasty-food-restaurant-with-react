import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import menuListReducer from "./menuListReducer";
import cartReducer from "./cartReducer";
import searchMenuReducer from "./searchMenuReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  menuListReducer,
  cartReducer,
  searchMenuReducer,
});

export default rootReducer;
