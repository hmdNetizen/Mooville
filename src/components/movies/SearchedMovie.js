import React from "react";
import { connect } from "react-redux";

const SearchedMovie = ({ loading }) => {
  return loading ? <h1>Loading</h1> : <h1>Stopped Loading</h1>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
  };
};
export default connect(mapStateToProps)(SearchedMovie);
