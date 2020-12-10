import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const FetchActionMovies = ({ actions, darkMode }) => {
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
        {actions.map((action) => (
          <Link className="action__card__link">
            <div className="action__card">
              <img
                src={`http://image.tmdb.org/t/p/w185/${action.poster_path}`}
                alt={`${action.original_title} poster`}
                className="action__card__poster"
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
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    actions: state.movies.moviesData.trending,
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(FetchActionMovies);
