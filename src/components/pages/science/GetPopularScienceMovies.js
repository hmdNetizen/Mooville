import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularScienceMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularScienceMovies = (props) => {
  const { popularScienceMovies, darkMode, showPopularScienceMovies } = props;
  useEffect(() => {
    showPopularScienceMovies();
  }, [showPopularScienceMovies]);
  return (
    <section
      className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}
    >
      <div className="genres">
        <h1
          className={`genres__title ${
            darkMode ? "genres__title--darkMode" : "genres__title--lightMode"
          }`}
        >
          Discover Movies (Science Fiction)
        </h1>
        <div className="carousel">
          <h2
            className={`carousel__heading ${
              darkMode
                ? "carousel__heading--darkMode"
                : "carousel__heading--lightMode"
            }`}
          >
            Most Popular (2020)
          </h2>
          <Trending movies={popularScienceMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularScienceMovies: state.movies.popularScienceMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularScienceMovies: () => dispatch(getPopularScienceMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularScienceMovies);
