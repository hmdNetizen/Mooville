import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleMovie } from "../../redux";

const ShowViewedMovies = ({ viewed, match, getViewedMovies, darkMode }) => {
  useEffect(() => {
    getViewedMovies(match.id);
  }, [getViewedMovies, match]);
  return (
    <div
      className={`viewed ${
        darkMode ? "viewed--darkMode" : "viewed--lightMode"
      }`}
    >
      <p
        className={`viewed__defaultText ${
          darkMode
            ? "viewed__defaultText--darkMode"
            : "viewed__defaultText--lightMode"
        }`}
      >
        You currently haven't viewed any movie. Click on any movie to keep track
        of the movies you have viewed
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viewed: state.movies.viewedMovies,
    darkMode: state.theme.darkTheme,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getViewedMovies: (movieId) => dispatch(getSingleMovie(movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowViewedMovies);
