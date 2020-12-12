import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleMovie } from "./../../redux";

// This component fetches individual movies based on the movie user clicked
const FetchMovie = ({ movie, getMovie, match }) => {
  useEffect(() => {
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, [getMovie]);
  return <h1 style={{ marginTop: "5em" }}>{movie.title}</h1>;
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getSingleMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchMovie);
