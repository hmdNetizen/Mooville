import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingThrillerMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingThrillerMovies = (props) => {
  const { showUpcomingThrillerMovies, upcomingThrillerMovies, darkMode } =
    props;
  useEffect(() => {
    showUpcomingThrillerMovies();
  }, [showUpcomingThrillerMovies]);
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
          <Trending movies={upcomingThrillerMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingThrillerMovies: state.movies.upcomingThrillerMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingThrillerMovies: () => dispatch(getUpcomingThrillerMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingThrillerMovies);
