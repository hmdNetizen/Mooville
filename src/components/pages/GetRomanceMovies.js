import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRomanceMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetRomanceMovies = (props) => {
  const { showRomanceMovies, romanceMovies, loading, error, darkMode } = props;
  useEffect(() => {
    showRomanceMovies();
  }, [showRomanceMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      } ${romanceMovies.length < 1 && "main__fullHeight"}`}
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
            Romance
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
              {romanceMovies.map((movie) => (
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
    romanceMovies: state.movies.romanceMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showRomanceMovies: () => dispatch(getRomanceMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRomanceMovies);
