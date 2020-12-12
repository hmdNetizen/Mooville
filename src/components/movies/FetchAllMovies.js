import React from "react";
import FetchActionMovies from "./FetchActionMovies";
import { connect } from "react-redux";

const FetchAllMovies = ({ darkMode, error }) => {
  return (
    <section className="movie">
      <h2
        className={`movie__heading ${
          darkMode ? "movie__heading--darkMode" : "movie__heading--lightMode"
        }`}
      >
        Discover Movies (Action)
      </h2>
      <FetchActionMovies />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
    error: state.movies.error,
  };
};

export default connect(mapStateToProps)(FetchAllMovies);
