import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActionMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetActionMovies = (props) => {
  const {
    showActionMovies,
    actionMovies,
    loading,
    error,
    darkMode,
  } = props;
  useEffect(() => {
    showActionMovies();
  }, [showActionMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      }`}
    >
      <div className="section" style={{marginLeft: 0}}>
        <div className="movie">
          <h2
            className={`movie__heading ${
              darkMode
                ? "movie__heading--darkMode"
                : "movie__heading--lightMode"
            }`}
          >
            Discover(Action)
          </h2>
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
          ) : (
            <div className="movie__card__wrapper">
              {actionMovies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(GetActionMovies);
