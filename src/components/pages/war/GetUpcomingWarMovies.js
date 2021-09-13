import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingWarMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingWarMovies = (props) => {
  const { showUpcomingWarMovies, upcomingWarMovies, darkMode } = props;
  useEffect(() => {
    showUpcomingWarMovies();
  }, [showUpcomingWarMovies]);
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
          <Trending movies={upcomingWarMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingWarMovies: state.movies.upcomingWarMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingWarMovies: () => dispatch(getUpcomingWarMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingWarMovies);
