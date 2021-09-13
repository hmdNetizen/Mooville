import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingRomanceMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingRomanceMovies = (props) => {
  const { showUpcomingRomanceMovies, upcomingRomanceMovies, darkMode } = props;
  useEffect(() => {
    showUpcomingRomanceMovies();
  }, [showUpcomingRomanceMovies]);
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
          <Trending movies={upcomingRomanceMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingRomanceMovies: state.movies.upcomingRomanceMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingRomanceMovies: () => dispatch(getUpcomingRomanceMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingRomanceMovies);
