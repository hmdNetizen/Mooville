import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingAnimationMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingAnimationMovies = (props) => {
  const { showUpcomingAnimationMovies, upcomingAnimationMovies, darkMode } =
    props;
  useEffect(() => {
    showUpcomingAnimationMovies();
  }, [showUpcomingAnimationMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      }`}
    >
      <div className="section">
        <div className="carousel">
          <h2
            className={`carousel__heading ${
              darkMode
                ? "carousel__heading--darkMode"
                : "carousel__heading--lightMode"
            }`}
          >
            Upcoming (2021)
          </h2>
          <Trending movies={upcomingAnimationMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingAnimationMovies: state.movies.upcomingAnimationMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingAnimationMovies: () => dispatch(getUpcomingAnimationMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingAnimationMovies);
