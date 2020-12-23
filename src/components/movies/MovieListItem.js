import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import { FaCloudDownloadAlt } from "react-icons/fa";

const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=185&h=262&q=60";

const MovieListItem = ({ title, movie, darkMode }) => {
  return (
    <div className="movieList">
      <h3>{title}</h3>
      <Link to={`/movie/${movie.id}`} className="movieList__card__link">
        <div className="movieList__wrapper">
          <div className="movieList__card">
            <img
              src={`${
                movie.poster_path !== null
                  ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path
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
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
            <StarRating rating={Math.ceil(movie.vote_average / 2)} />
          </div>
          <div className="movieList__download__icon">
            <FaCloudDownloadAlt />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieListItem;
