import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingScienceFictionMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingScienceFictionMovies = (props) => {
  const {
    showUpcomingScienceFictionMovies,
    upcomingScienceFictionMovies,
    darkMode,
  } = props;
  useEffect(() => {
    showUpcomingScienceFictionMovies();
  }, [showUpcomingScienceFictionMovies]);
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
          <Trending movies={upcomingScienceFictionMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingScienceFictionMovies: state.movies.upcomingScienceMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingScienceFictionMovies: () =>
      dispatch(getUpcomingScienceFictionMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingScienceFictionMovies);
