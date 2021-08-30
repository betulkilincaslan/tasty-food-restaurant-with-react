import React from "react";
import { BiSearch } from "react-icons/bi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchMenuActions from "../../redux/actions/searchMenuActions";

const SearchMenuItem = ({ searchQuery, actions }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    actions.searchMenu("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mb-8 h-16 flex justify-center items-center px-8"
    >
      <div className="flex items-center w-full sm:w-96 rounded-full overflow-x-hidden border-2 border-green-700 bg-gray-100 text-gray-800">
        <span className="text-lg pl-2 font-bold">
          <BiSearch />
        </span>
        <input
          onChange={(e) => actions.searchMenu(e.target.value)}
          value={searchQuery}
          type="search"
          placeholder="Search here"
          className="focus:outline-none flex-1 h-10 bg-transparent p-4 placeholder-gray-500 font-semibold text-lg"
        ></input>
      </div>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    searchQuery: state.searchMenuReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchMenu: bindActionCreators(searchMenuActions.searchMenu, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenuItem);
