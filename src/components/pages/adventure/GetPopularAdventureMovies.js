import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularAdventureMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularAdventureMovies = (props) => {
  const { popularAdventureMovies, darkMode, showPopularAdventureMovies } =
    props;
  useEffect(() => {
    showPopularAdventureMovies();
  }, [showPopularAdventureMovies]);
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
          Discover Movies (Adventure)
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
          <Trending movies={popularAdventureMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularAdventureMovies: state.movies.popularAdventureMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularAdventureMovies: () => dispatch(getPopularAdventureMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularAdventureMovies);
