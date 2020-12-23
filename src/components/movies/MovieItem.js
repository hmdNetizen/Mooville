import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=185&h=262&q=60";

const Movies = ({ movie, darkMode }) => {
  return (
    <Fragment>
      <Link to={`/movie/${movie.id}`} className="movie__card__link">
        <div className="movie__card">
          <img
            src={`${
              movie.poster_path !== null
                ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path
                : makeshiftPoster
            }`}
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
            {movie.title || movie.name}
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
