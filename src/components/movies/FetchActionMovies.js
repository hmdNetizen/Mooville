import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActionMovies } from "../../redux";
import Spinner from "../Spinner";
import StarRating from "../StarRating";

const FetchActionMovies = (props) => {
  const { darkMode, showActionMovies, actionMovies, loading } = props;
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
        Discover Movies (Action)
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="action__card__wrapper">
          {actionMovies.map((movie) => (
            <Link to="/" className="action__card__link" key={movie.id}>
              <div className="action__card">
                <img
                  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`${movie.original_title} poster`}
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
                  {movie.original_title}
                </h4>
                <p
                  className={`action__card__rating ${
                    darkMode
                      ? "action__card__rating--darkMode"
                      : "action__card__rating--lightMode"
                  }`}
                >
                  <StarRating rating={Math.ceil(movie.vote_average / 2)} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
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
