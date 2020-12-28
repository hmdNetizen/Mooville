import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAnimationMovies } from "../../../redux";
import Spinner from "../../Spinner";
import MovieItem from "../../movies/MovieItem";

const GetAnimationMovies = (props) => {
  const {
    showAnimationMovies,
    animationMovies,
    loading,
    error,
    darkMode,
  } = props;
  useEffect(() => {
    showAnimationMovies();
  }, [showAnimationMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      } ${animationMovies.length < 1 && "main__fullHeight"}`}
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
            Animation
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
              {animationMovies.map((movie) => (
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
    animationMovies: state.movies.animationMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAnimationMovies: () => dispatch(getAnimationMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAnimationMovies);
