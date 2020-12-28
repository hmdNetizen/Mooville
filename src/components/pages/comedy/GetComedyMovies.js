import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComedyMovies } from "../../../redux";
import Spinner from "../../Spinner";
import MovieItem from "../../movies/MovieItem";

const GetComedyMovies = (props) => {
  const { showComedyMovies, comedyMovies, loading, error, darkMode } = props;
  useEffect(() => {
    showComedyMovies();
  }, [showComedyMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      } ${comedyMovies.length < 1 && "main__fullHeight"}`}
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
            Comedy
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
              {comedyMovies.map((movie) => (
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
    comedyMovies: state.movies.comedyMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showComedyMovies: () => dispatch(getComedyMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetComedyMovies);
