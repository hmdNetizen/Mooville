import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import MovieListItem from "./MovieListItem";

const SearchedMovie = ({ loading, searched, error, darkMode }) => {
  return (
    <div className="searchedMovies">
      {loading ? (
        <Spinner />
      ) : error ? (
        <h2
          className={`movie__error__heading ${
            darkMode
              ? "movie__error__heading--darkMode"
              : "movie__error__heading--lightMode"
          }`}
        >
          Unknown Server Error!
        </h2>
      ) : searched && searched.length < 1 ? (
        <h2
          className={`movie__error__heading ${
            darkMode
              ? "movie__error__heading--darkMode"
              : "movie__error__heading--lightMode"
          }`}
        >
          Movie not found
        </h2>
      ) : (
        <div className="movie__card__wrapper">
          {searched &&
            searched.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    searched: state.movies.searchedMovies,
    darkMode: state.theme.darkTheme,
    error: state.movies.error,
  };
};
export default connect(mapStateToProps)(SearchedMovie);
