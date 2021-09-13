import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../redux";
import Trending from "./Trending";

const FetchTrendingMovie = (props) => {
  const { showTrendingMovies, trending, darkMode } = props;
  useEffect(() => {
    showTrendingMovies();
  }, [showTrendingMovies]);
  return (
    <section className="carousel">
      <h2
        className={`carousel__heading ${
          darkMode
            ? "carousel__heading--darkMode"
            : "carousel__heading--lightMode"
        }`}
      >
        Trending Now
      </h2>
      <Trending movies={trending} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    trending: state.movies.trending,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTrendingMovies: () => dispatch(getTrendingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTrendingMovie);
