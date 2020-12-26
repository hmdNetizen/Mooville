import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getScienceFictionMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetScienceFictionMovies = (props) => {
  const {
    showScienceFictionMovies,
    scienceFictionMovies,
    loading,
    error,
    darkMode,
  } = props;
  useEffect(() => {
    showScienceFictionMovies();
  }, [showScienceFictionMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      } ${scienceFictionMovies.length < 1 && "main__fullHeight"}`}
    >
      <div className="section">
        <div className="movie">
          <h2
            className={`movie__heading ${
              darkMode
                ? "movie__heading--darkMode"
                : "movie__heading--lightMode"
            }`}
          >
            Science Fiction
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
              {scienceFictionMovies.map((movie) => (
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
    scienceFictionMovies: state.movies.scienceFictionMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showScienceFictionMovies: () => dispatch(getScienceFictionMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetScienceFictionMovies);
