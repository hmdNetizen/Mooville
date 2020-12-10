import React from "react";
import { connect } from "react-redux";

const SearchField = ({ darkMode, selectedMenu }) => {
  return (
    <form
      className={`search ${
        selectedMenu === 1 ? "search__showForm" : "search__hideForm"
      }`}
    >
      <input
        type="text"
        placeholder="Search your favourite movies"
        className={
          darkMode
            ? "search__input search__input--darkMode"
            : "search__input search__input--lightMode"
        }
        autoFocus
      />
      <button
        type="submit"
        className={`search__button ${
          darkMode ? "search__button--darkMode" : "search__button--lightMode"
        }`}
      >
        Search
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
    selectedMenu: state.utils.selectedMenu,
  };
};

export default connect(mapStateToProps)(SearchField);
