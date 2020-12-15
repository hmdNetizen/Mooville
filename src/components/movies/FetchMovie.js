import React, { Fragment, useEffect, useState } from "react";
// import { cloneDeep } from "lodash";
import { connect } from "react-redux";
import { getSingleMovie, getSimilarMovies } from "./../../redux";
import StarRating from "../StarRating";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillLike, AiFillDislike, AiOutlineDownload } from "react-icons/ai";
import Spinner from "../Spinner";
import MovieItem from "./MovieItem";

// This component fetches individual movies based on the movie user clicked
const FetchMovie = (props) => {
  const {
    selectedMovie,
    getMovie,
    match,
    loading,
    darkMode,
    similarMovies,
    fetchSimilarMovies,
  } = props;

  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    getMovie(match.params.id);
    fetchSimilarMovies(match.params.id);
  }, [getMovie, match, fetchSimilarMovies]);

  return (
    <section className="singleMovie">
      <div
        className={`singleMovie__wrapper ${
          darkMode
            ? "singleMovie__wrapper--darkMode"
            : "singleMovie__wrapper--lightMode"
        }`}
      >
        <div className="singleMovie__video">
          {loading ? (
            <div className="singleMovie__spinner__wrapper">
              <Spinner />
            </div>
          ) : (
            <iframe
              title={selectedMovie.title}
              width="420"
              height="345"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&controls=0"
              className="singleMovie__videoPlayer"
            ></iframe>
          )}
        </div>
        <div
          className={`singleMovie__description ${
            darkMode
              ? "singleMovie__description--darkMode"
              : "singleMovie__description-lightMode"
          }`}
        >
          {loading ? (
            <div className="singleMovie__spinner__wrapper singleMovie__spinner__wrapper--details">
              <Spinner />
            </div>
          ) : (
            <Fragment>
              <h2 className="singleMovie__title">{selectedMovie.title}</h2>
              <Fragment>
                <StarRating
                  rating={Math.ceil(selectedMovie.vote_average / 2)}
                />
              </Fragment>

              <p className="singleMovie__overview">{selectedMovie.overview}</p>
              <ul className="singleMovie__list">
                <li
                  className={`singleMovie__listItem`}
                  onClick={() => setBookmarked((prev) => !prev)}
                >
                  <CgPlayListAdd
                    className={`singleMovie__listItemIcon ${
                      bookmarked && darkMode
                        ? "singleMovie__listItemIcon__iconStyles--darkMode"
                        : bookmarked && !darkMode
                        ? "singleMovie__listItemIcon__iconStyles--lightMode"
                        : undefined
                    }`}
                  />
                  <p
                    className={`singleMovie__listItemText ${
                      bookmarked && darkMode
                        ? "singleMovie__listItemIcon__textStyles--darkMode"
                        : bookmarked && !darkMode
                        ? "singleMovie__listItemIcon__textStyles--lightMode"
                        : undefined
                    }`}
                  >
                    {bookmarked ? "Bookmarked" : "Bookmark"}
                  </p>
                </li>
                <li
                  className="singleMovie__listItem"
                  onClick={() => {
                    setLiked((prev) => !prev);
                    setDisliked(false);
                  }}
                >
                  <AiFillLike
                    className={`singleMovie__listItemIcon ${
                      liked && darkMode
                        ? "singleMovie__listItemIcon__iconStyles--darkMode"
                        : liked && !darkMode
                        ? "singleMovie__listItemIcon__iconStyles--lightMode"
                        : undefined
                    }`}
                  />
                  <p
                    className={`singleMovie__listItemText ${
                      liked && darkMode
                        ? "singleMovie__listItemIcon__textStyles--darkMode"
                        : liked && !darkMode
                        ? "singleMovie__listItemIcon__textStyles--lightMode"
                        : undefined
                    }`}
                  >
                    {liked ? "Liked" : "Like"}
                  </p>
                </li>
                <li
                  className="singleMovie__listItem"
                  onClick={() => {
                    setDisliked((prev) => !prev);
                    setLiked(false);
                  }}
                >
                  <AiFillDislike
                    className={`singleMovie__listItemIcon ${
                      disliked && darkMode
                        ? "singleMovie__listItemIcon__iconStyles--darkMode"
                        : disliked && !darkMode
                        ? "singleMovie__listItemIcon__iconStyles--lightMode"
                        : undefined
                    }`}
                  />
                  <p
                    className={`singleMovie__listItemText ${
                      disliked && darkMode
                        ? "singleMovie__listItemIcon__textStyles--darkMode"
                        : disliked && !darkMode
                        ? "singleMovie__listItemIcon__textStyles--lightMode"
                        : undefined
                    }`}
                  >
                    {disliked ? "Disliked" : "Dislike"}
                  </p>
                </li>
              </ul>
              <div className="singleMovie__download__wrapper">
                <button className="singleMovie__download__btn">
                  <AiOutlineDownload
                    size="2rem"
                    className="singleMovie__download__btn__icon"
                  />
                  <span className="singleMovie__download__btn__text">
                    Download
                  </span>
                </button>
              </div>
              <div className="singleMovie__similarMovies">
                <h2 className="singleMovie__similarMovies__heading">
                  More like this
                </h2>
                <div className="singleMovie__similarMovies__wrapper">
                  {similarMovies.map((movie) => (
                    <MovieItem movie={movie} key={movie.id} />
                  ))}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movies.selectedMovie,
    loading: state.utils.loading,
    darkMode: state.theme.darkTheme,
    similarMovies: state.movies.similarMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getSingleMovie(id)),
    fetchSimilarMovies: (id) => dispatch(getSimilarMovies(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchMovie);
