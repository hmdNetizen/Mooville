import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingHorrorMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingHorrorMovies = (props) => {
  const { showUpcomingHorrorMovies, upcomingHorrorMovies, darkMode } = props;
  useEffect(() => {
    showUpcomingHorrorMovies();
  }, [showUpcomingHorrorMovies]);
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
          <Trending movies={upcomingHorrorMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingHorrorMovies: state.movies.upcomingHorrorMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingHorrorMovies: () => dispatch(getUpcomingHorrorMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingHorrorMovies);
