import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingDocumentaryMovies } from "../../../redux";
import Trending from "../../movies/Trending";

const GetUpcomingDocumentaryMovies = (props) => {
  const { showUpcomingDocumentaryMovies, upcomingDocumentaryMovies, darkMode } =
    props;
  useEffect(() => {
    showUpcomingDocumentaryMovies();
  }, [showUpcomingDocumentaryMovies]);
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
          <Trending movies={upcomingDocumentaryMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingDocumentaryMovies: state.movies.upcomingDocumentaryMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingDocumentaryMovies: () =>
      dispatch(getUpcomingDocumentaryMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingDocumentaryMovies);
