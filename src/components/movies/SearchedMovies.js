import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import MovieListItem from "./MovieListItem";
import MovieItem from "./MovieItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SearchedMovie = ({ loading, searched, error, darkMode }) => {
  const matchesSM = useMediaQuery("(max-width: 960px)");
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
      ) : searched.length === 0 ? (
        <h2
          className={`movie__error__heading ${
            darkMode
              ? "movie__error__heading--darkMode"
              : "movie__error__heading--lightMode"
          }`}
        >
          Movie not found
        </h2>
      ) : matchesSM ? (
        <div
          className={`movieList ${
            darkMode ? "movieList--darkMode" : "movieList--lightMode"
          }`}
        >
          <h3
            className={`movieList__mediaType__title ${
              darkMode
                ? "movieList__mediaType__title--darkMode"
                : "movieList__mediaType__title--lightMode"
            }`}
          >
            TV shows & Movies
          </h3>
          {searched &&
            searched.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
        </div>
      ) : (
        <div className="movie__card__wrapper">
          {searched.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
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
