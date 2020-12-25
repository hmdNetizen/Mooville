import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDocumentaryMovies } from "../../redux";
import Spinner from "../Spinner";
import MovieItem from "../movies/MovieItem";

const GetDocumentaryMovies = (props) => {
  const {
    showDocumentaryMovies,
    documentaryMovies,
    loading,
    error,
    darkMode,
  } = props;
  useEffect(() => {
    showDocumentaryMovies();
  }, [showDocumentaryMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      }`}
    >
      <div className="section">
        <div className="movie">
          <h2
            className={`movie__heading ${
              darkMode
                ? "movie__heading--darkMode"
                : "movie__heading--lightMode"
            }`}
          >
            Documentary
          </h2>
          {loading ? (
            <Spinner />
          ) : error ? (
            <h2
              className={`movie__error__heading ${
                darkMode
                  ? "movie__error__heading--darkMode"
                  : "movie__error__heading--lightMode"
              }`}
            >
              Unknown Server Error!
            </h2>
          ) : (
            <div className="movie__card__wrapper">
              {documentaryMovies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    documentaryMovies: state.movies.documentaryMovies,
    error: state.movies.error,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDocumentaryMovies: () => dispatch(getDocumentaryMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetDocumentaryMovies);
