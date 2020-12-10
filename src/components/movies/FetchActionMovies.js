import React, { Fragment } from "react";
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
          <div className="action__card">
            <Link>
              <img
                src={`http://image.tmdb.org/t/p/w185/${action.poster_path}`}
              />
              <h4>{action.original_title}</h4>
              <p>Ratings: {action.id}</p>
            </Link>
          </div>
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
