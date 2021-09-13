import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularThrillerMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularThrillerMovies = (props) => {
  const { popularThrillerMovies, darkMode, showPopularThrillerMovies } = props;
  useEffect(() => {
    showPopularThrillerMovies();
  }, [showPopularThrillerMovies]);
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
          Discover Movies (Thriller)
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
          <Trending movies={popularThrillerMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularThrillerMovies: state.movies.popularThrillerMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularThrillerMovies: () => dispatch(getPopularThrillerMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularThrillerMovies);
