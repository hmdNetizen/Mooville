import React, { useEffect } from "react";
import { connect } from "react-redux";

const ShowViewedMovies = ({ viewedMovies, selectedMovie }) => {
  useEffect(() => {
    console.log(selectedMovie);
  });
  return (
    <div style={{ marginTop: "5em" }}>
      You currently haven't viewed any movie. Click on any movie to keep track
      of the movies you have viewed
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viewedMovies: state.movies.viewed,
    selectedMovie: state.movies.selectedMovie,
  };
};

export default connect(mapStateToProps)(ShowViewedMovies);