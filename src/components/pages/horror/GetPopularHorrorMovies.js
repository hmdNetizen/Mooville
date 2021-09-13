import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularHorrorMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularHorrorMovies = (props) => {
  const { popularHorrorMovies, darkMode, showPopularHorrorMovies } = props;
  useEffect(() => {
    showPopularHorrorMovies();
  }, [showPopularHorrorMovies]);
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
          Discover Movies (Horror)
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
          <Trending movies={popularHorrorMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularHorrorMovies: state.movies.popularHorrorMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularHorrorMovies: () => dispatch(getPopularHorrorMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularHorrorMovies);
