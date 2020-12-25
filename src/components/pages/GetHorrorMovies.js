import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHorrorMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetHorrorMovies = (props) => {
  const { showHorrorMovies, horrorMovies, loading, error, darkMode } = props;
  useEffect(() => {
    showHorrorMovies();
  }, [showHorrorMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      }`}
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
            Horror
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
              {horrorMovies.map((movie) => (
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
    horrorMovies: state.movies.horrorMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showHorrorMovies: () => dispatch(getHorrorMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetHorrorMovies);
