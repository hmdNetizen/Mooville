import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularDocumentaryMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularDocumentaryMovies = (props) => {
  const { popularDocumentaryMovies, darkMode, showPopularDocumentaryMovies } =
    props;
  useEffect(() => {
    showPopularDocumentaryMovies();
  }, [showPopularDocumentaryMovies]);
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
          Discover Movies (Documentary)
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
          <Trending movies={popularDocumentaryMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularDocumentaryMovies: state.movies.popularDocumentaryMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularDocumentaryMovies: () => dispatch(getPopularDocumentaryMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularDocumentaryMovies);
