import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAdventureMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetAdventureMovies = (props) => {
  const {
    showAdventureMovies,
    adventureMovies,
    loading,
    error,
    darkMode,
  } = props;
  useEffect(() => {
    showAdventureMovies();
  }, [showAdventureMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      } ${adventureMovies.length < 1 && "main__fullHeight"}`}
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
            Adventure
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
              {adventureMovies.map((movie) => (
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
    adventureMovies: state.movies.adventureMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAdventureMovies: () => dispatch(getAdventureMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAdventureMovies);
