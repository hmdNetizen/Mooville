import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularAnimationMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetPopularAnimationMovies = (props) => {
  const { popularAnimationMovies, darkMode, showPopularAnimationMovies } =
    props;
  useEffect(() => {
    showPopularAnimationMovies();
  }, [showPopularAnimationMovies]);
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
          Discover Movies (Animation)
        </h1>
        <Trending movies={popularAnimationMovies} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularAnimationMovies: state.movies.popularAnimationMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularAnimationMovies: () => dispatch(getPopularAnimationMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularAnimationMovies);
