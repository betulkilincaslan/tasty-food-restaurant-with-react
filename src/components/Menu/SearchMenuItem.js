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
      <div className="search-input-container">
        <span className="text-lg pl-2 font-bold">
          <BiSearch />
        </span>
        <input
          onChange={(e) => actions.searchMenu(e.target.value)}
          value={searchQuery}
          type="search"
          placeholder="Search here"
          className="search-input"
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
