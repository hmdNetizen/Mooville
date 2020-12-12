import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActionMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "./MovieItem";

const FetchActionMovies = (props) => {
  const { showActionMovies, actionMovies, loading, error, darkMode } = props;
  useEffect(() => {
    showActionMovies();
  }, [showActionMovies]);
  return loading ? (
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
  ) : (
    <div className="movie__card__wrapper">
      {actionMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    actionMovies: state.movies.actionMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showActionMovies: () => dispatch(getActionMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchActionMovies);
