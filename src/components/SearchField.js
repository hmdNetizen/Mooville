import React from "react";
import { connect } from "react-redux";

const SearchField = ({ darkMode }) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search your favourite movies"
        className={
          darkMode
            ? "search__input search__input--darkMode"
            : "search__input search__input--lightMode"
        }
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
  };
};

export default connect(mapStateToProps)(SearchField);
