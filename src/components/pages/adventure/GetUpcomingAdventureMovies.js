import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingAdventureMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingAdventureMovies = (props) => {
  const { showUpcomingAdventureMovies, upcomingAdventureMovies, darkMode } =
    props;
  useEffect(() => {
    showUpcomingAdventureMovies();
  }, [showUpcomingAdventureMovies]);
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
          <Trending movies={upcomingAdventureMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingAdventureMovies: state.movies.upcomingAdventureMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingAdventureMovies: () => dispatch(getUpcomingAdventureMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingAdventureMovies);
