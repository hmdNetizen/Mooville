import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { connect } from "react-redux";

const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=154&h=231&q=60";

const MovieListItem = ({ title, movie, darkMode }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <Link to={`/movie/${movie.id}`} className="movieList__card__link">
        <div className="movieList__wrapper">
          <div className="movieList__card">
            <img
              src={`${
                movie.poster_path !== null
                  ? "http://image.tmdb.org/t/p/w154/" + movie.poster_path
                  : makeshiftPoster
              }`}
              alt={`${movie.title || movie.name} poster`}
              className={`movieList__card__poster ${
                darkMode
                  ? "movieList__card__poster--darkMode"
                  : "movieList__card__poster--lightMode"
              }`}
            />
          </div>
          <div className="movieList__details">
            <h4
              className={`movieList__title ${
                darkMode
                  ? "movieList__title--darkMode"
                  : "movieList__title--lightMode"
              }`}
            >
              {movie.title || movie.name}
            </h4>
            <p
              className={`movieList__date ${
                darkMode
                  ? "movieList__date--darkMode"
                  : "movieList__date--lightMode"
              }`}
            >
              {movie.release_date}
            </p>
            <StarRating rating={Math.ceil(movie.vote_average / 2)} />
          </div>
          <div
            className={`movieList__download__icon ${
              darkMode
                ? "movieList__download__icon--darkMode"
                : "movieList__download__icon--lightMode"
            }`}
          >
            <FaCloudDownloadAlt />
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

export default connect(mapStateToProps)(MovieListItem);
