import React, { useState } from "react";
import { connect } from "react-redux";
import { getSearchedMovies } from "../redux";

const SearchInput = ({ darkMode, fetchSearchedMovies, searched, loading }) => {
  const [text, setText] = useState("");

  const handleMovieSearch = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      fetchSearchedMovies(text);
    } else {
      alert("Please enter a text");
    }
    setText("");
  };

  return (
    <form
      onSubmit={handleMovieSearch}
      className={`search ${
        darkMode ? "search--darkMode" : "search--lightMode"
      } ${searched.length < 1 && "search--fullHeight"}`}
    >
      <input
        type="text"
        placeholder="Search your favourite movies"
        value={text}
        onChange={(e) => setText(e.target.value)}
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
    searched: state.movies.searchedMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchedMovies: (searched) => dispatch(getSearchedMovies(searched)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
