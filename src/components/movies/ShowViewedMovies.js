import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleMovie } from "../../redux";

const ShowViewedMovies = ({ viewed, match, getViewedMovies }) => {
  useEffect(() => {
    getViewedMovies(match.id);
  }, [getViewedMovies, match]);
  return (
    <div className="viewed">
      <p>
        You currently haven't viewed any movie. Click on any movie to keep track
        of the movies you have viewed
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viewed: state.movies.viewedMovies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getViewedMovies: (value) => dispatch(getSingleMovie(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowViewedMovies);
