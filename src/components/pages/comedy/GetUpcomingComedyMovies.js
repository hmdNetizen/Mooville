import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingComedyMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingComedyMovies = (props) => {
  const { showUpcomingComedyMovies, upcomingComedyMovies, darkMode } = props;
  useEffect(() => {
    showUpcomingComedyMovies();
  }, [showUpcomingComedyMovies]);
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
          <Trending movies={upcomingComedyMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingComedyMovies: state.movies.upcomingComedyMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingComedyMovies: () => dispatch(getUpcomingComedyMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingComedyMovies);
