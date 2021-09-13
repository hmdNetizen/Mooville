import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularRomanceMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularRomanceMovies = (props) => {
  const { popularRomanceMovies, darkMode, showPopularRomanceMovies } = props;
  useEffect(() => {
    showPopularRomanceMovies();
  }, [showPopularRomanceMovies]);
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
          Discover Movies (Romance)
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
          <Trending movies={popularRomanceMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularRomanceMovies: state.movies.popularRomanceMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularRomanceMovies: () => dispatch(getPopularRomanceMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularRomanceMovies);
