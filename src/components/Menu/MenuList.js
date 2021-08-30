import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as menuActions from "../../redux/actions/menuActions";
import MenuListItem from "./MenuLisItem";

const MenuList = ({ searchQuery, menu, actions }) => {
  // **********  Getting menu ********** //
  useEffect(() => {
    actions.getMenu();
  }, [actions]);

  // **********  Getting filtered menu items ********** //
  let filteredMenu = menu.filter((menuItem) => {
    return (
      menuItem.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  });

  return (
    <div className="container grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-2">
      {filteredMenu.map((menuItem) => (
        <MenuListItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    menu: state.menuListReducer,
    searchQuery: state.searchMenuReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMenu: bindActionCreators(menuActions.getMenu, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
