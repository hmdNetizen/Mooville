import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActionMovies } from "../../redux";
import Spinner from "../Spinner";

const FetchActionMovies = ({
  darkMode,
  showActionMovies,
  actionMovies,
  loading,
}) => {
  console.log(actionMovies);
  useEffect(() => {
    showActionMovies();
  }, [showActionMovies]);
  return (
    <section className="action">
      <h2
        className={`action__heading ${
          darkMode ? "action__heading--darkMode" : "action__heading--lightMode"
        }`}
      >
        Discover Movies (Action){" "}
      </h2>
      <div className="action__card__wrapper">
        {loading ? (
          <Spinner />
        ) : (
          actionMovies.map((action) => (
            <Link to="/" className="action__card__link" key={action.id}>
              <div className="action__card">
                <img
                  src={`http://image.tmdb.org/t/p/w185/${action.poster_path}`}
                  alt={`${action.original_title} poster`}
                  className={`action__card__poster ${
                    darkMode
                      ? "action__card__poster--darkMode"
                      : "action__card__poster--lightMode"
                  }`}
                />
                <h4
                  className={`action__card__title ${
                    darkMode
                      ? "action__card__title--darkMode"
                      : "action__card__title--lightMode"
                  }`}
                >
                  {action.original_title}
                </h4>
                <p
                  className={`action__card__rating ${
                    darkMode
                      ? "action__card__rating--darkMode"
                      : "action__card__rating--lightMode"
                  }`}
                >
                  Ratings: {action.id}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
    actionMovies: state.movies.actionMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showActionMovies: () => dispatch(getActionMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchActionMovies);
