import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularWarMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularWarMovies = (props) => {
  const { popularWarMovies, darkMode, showPopularWarMovies } = props;
  useEffect(() => {
    showPopularWarMovies();
  }, [showPopularWarMovies]);
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
          Discover Movies (War)
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
          <Trending movies={popularWarMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularWarMovies: state.movies.popularWarMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularWarMovies: () => dispatch(getPopularWarMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularWarMovies);
