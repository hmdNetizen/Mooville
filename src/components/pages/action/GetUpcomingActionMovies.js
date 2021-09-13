import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingActionMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingActionMovies = (props) => {
  const { showUpcomingActionMovies, upcomingActionMovies, darkMode } = props;
  useEffect(() => {
    showUpcomingActionMovies();
  }, [showUpcomingActionMovies]);
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
          <Trending movies={upcomingActionMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingActionMovies: state.movies.upcomingActionMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingActionMovies: () => dispatch(getUpcomingActionMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingActionMovies);
