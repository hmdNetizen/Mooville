import React, { useState } from "react";
import { connect } from "react-redux";
import { getSearchedMovies } from "../redux";

const SearchField = ({
  darkMode,
  selectedMenu,
  fetchSearchedMovies,
  movieSearched,
  loading,
}) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== "") {
      fetchSearchedMovies(text);
    } else {
      alert("Field cannot be empty");
    }
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={`search`}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
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
    selectedMenu: state.utils.selectedMenu,
    movieSearched: state.movies.searchedMovies,
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchedMovies: (searched) => dispatch(getSearchedMovies(searched)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
