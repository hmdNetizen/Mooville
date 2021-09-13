import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularComedyMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularComedyMovies = (props) => {
  const { popularComedyMovies, darkMode, showPopularComedyMovies } = props;
  useEffect(() => {
    showPopularComedyMovies();
  }, [showPopularComedyMovies]);
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
          Discover Movies (Comedy)
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
          <Trending movies={popularComedyMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularComedyMovies: state.movies.popularComedyMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularComedyMovies: () => dispatch(getPopularComedyMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularComedyMovies);
