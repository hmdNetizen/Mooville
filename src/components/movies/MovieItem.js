import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const Movies = ({ movie, darkMode }) => {
  return (
    <Fragment>
      <Link to={`/`} className="movie__card__link">
        <div className="movie__card">
          <img
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={`${movie.original_title} poster`}
            className={`movie__card__poster ${
              darkMode
                ? "movie__card__poster--darkMode"
                : "movie__card__poster--lightMode"
            }`}
          />
          <h4
            className={`movie__card__title ${
              darkMode
                ? "movie__card__title--darkMode"
                : "movie__card__title--lightMode"
            }`}
          >
            {movie.title}
          </h4>
          <div
            className={`movie__card__rating ${
              darkMode
                ? "movie__card__rating--darkMode"
                : "movie__card__rating--lightMode"
            }`}
          >
            <StarRating rating={Math.ceil(movie.vote_average / 2)} />
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(Movies);
