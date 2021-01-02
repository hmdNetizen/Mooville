import React, { Fragment, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getSingleMovie, getSimilarMovies, getMovieVideo } from "./../../redux";
import StarRating from "../StarRating";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillLike, AiFillDislike, AiOutlineDownload } from "react-icons/ai";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import Spinner from "../Spinner";
import MovieItem from "./MovieItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    fetchMovieVideo,
    video,
    actionMovies,
    error,
  } = props;

  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const matchesMD = useMediaQuery("(max-width: 1280px)");
  const matchesSM = useMediaQuery("(max-width: 960px)");

  const myRef = useRef(null);

  const notify = () =>
    toast.error("Download Unavailable", {
      position: matchesMD ? "top-center" : "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    function showMovieTitle() {
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          if (matchesSM && selectedMovie !== null) {
            window.scrollTo(0, myRef.current.offsetTop + "40vh");
          }
        },
        false
      );
    }
    getMovie(match.params.id);
    fetchSimilarMovies(match.params.id);
    fetchMovieVideo(match.params.id);
    showMovieTitle();
  }, [
    getMovie,
    match,
    matchesSM,
    selectedMovie,
    fetchSimilarMovies,
    fetchMovieVideo,
  ]);

  const limitActionMovie = actionMovies.slice(1, 7);

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
          ) : video && Object.keys(video).length < 1 ? (
            <div className="movie__error__wrapper">
              <h2
                className={`movie__error__heading ${
                  darkMode
                    ? "movie__error__heading--darkMode"
                    : "movie__error__heading--lightMode"
                }`}
              >
                Video Unavailable
              </h2>
            </div>
          ) : (
            video !== null &&
            video.map((vid) => (
              <iframe
                key={vid.id}
                title={vid.name}
                allow="autoplay; encrypted-media"
                src={`https://www.youtube.com/embed/${vid.key}?autoplay=1&controls=1&showinfo=0&enablejsapi=1&origin=https://mooville.vercel.app/`}
                className="singleMovie__videoPlayer"
              ></iframe>
            ))
          )}
        </div>
        <div
          ref={myRef}
          className={`singleMovie__description ${
            darkMode
              ? "singleMovie__description--darkMode"
              : "singleMovie__description--lightMode"
          } ${
            video &&
            Object.keys(video).length < 1 &&
            "singleMovie__description--removeMarginTop"
          }`}
        >
          {loading ? (
            <div className="singleMovie__spinner__wrapper singleMovie__spinner__wrapper--details">
              <Spinner />
            </div>
          ) : (
            selectedMovie && (
              <Fragment>
                <h2 className="singleMovie__title">{selectedMovie.title}</h2>
                <p className="singleMovie__date">
                  Released Date:{" "}
                  <span
                    className={`singleMovie__fullDate ${
                      darkMode
                        ? "singleMovie__fullDate--darkMode"
                        : "singleMovie__fullDate--lightMode"
                    }`}
                  >
                    {selectedMovie.release_date}
                  </span>
                </p>
                <Fragment>
                  <StarRating
                    rating={Math.ceil(selectedMovie.vote_average / 2)}
                  />
                </Fragment>

                <p className="singleMovie__overview">
                  {selectedMovie.overview}
                </p>
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
                  <button
                    onClick={notify}
                    className={`singleMovie__download__btn ${
                      darkMode
                        ? "singleMovie__download__btn--darkMode"
                        : "singleMovie__download__btn--lightMode"
                    }`}
                  >
                    <AiOutlineDownload
                      size="2rem"
                      className="singleMovie__download__btn__icon"
                    />
                    <span className="singleMovie__download__btn__text">
                      Download
                    </span>
                  </button>
                  <ToastContainer />
                </div>
                <div className="singleMovie__similarMovies">
                  <h2 className="singleMovie__similarMovies__heading">
                    More like this
                  </h2>
                  <div className="singleMovie__similarMovies__wrapper">
                    {similarMovies.length < 1
                      ? limitActionMovie.map((action) => (
                          <MovieItem movie={action} key={action.id} />
                        ))
                      : similarMovies &&
                        similarMovies.map((movie) => (
                          <MovieItem movie={movie} key={movie.id} />
                        ))}
                  </div>
                </div>
                <div className="singleMovie__reviews">
                  <div className="singleMovie__reviews__divider"></div>
                  <div
                    className="singleMovie__reviews__wrapper"
                    onClick={() => setShowReview((prev) => !prev)}
                  >
                    <h2 className="singleMovie__reviews__heading">Reviews</h2>
                    <div className="singleMovie__reviews__iconWrapper">
                      {showReview ? (
                        <IoIosArrowDropupCircle
                          size="2em"
                          className="singleMovie__reviews__icon"
                        />
                      ) : (
                        <IoIosArrowDropdownCircle
                          size="2em"
                          className="singleMovie__reviews__icon"
                        />
                      )}
                    </div>
                  </div>
                  <form
                    className={`${
                      showReview
                        ? "singleMovie__reviews__form--visible"
                        : "singleMovie__reviews__form--hidden"
                    }`}
                  >
                    <div className={`singleMovie__reviews__posts`}>
                      <div
                        className={`singleMovie__reviews__label ${
                          darkMode
                            ? "singleMovie__reviews__label--darkMode"
                            : "singleMovie__reviews__label--lightMode"
                        }`}
                      >
                        <h2>H</h2>
                      </div>
                      <div className="singleMovie__reviews__textAreaWrapper">
                        <textarea
                          name="review"
                          rows="7"
                          placeholder="Post a Review"
                        ></textarea>
                      </div>
                    </div>

                    <div className="singleMovie__reviews__btnWrapper">
                      <button className="singleMovie__reviews__btn__cancel">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className={`${
                          darkMode
                            ? "singleMovie__reviews__btn__post--darkMode"
                            : "singleMovie__reviews__btn__post--lightMode"
                        }`}
                      >
                        Post
                      </button>
                    </div>
                  </form>
                  <div
                    className={`${
                      showReview
                        ? "singleMovie__reviews__form--visible"
                        : "singleMovie__reviews__form--hidden"
                    }`}
                  >
                    <div className="singleMovie__reviews__divider"></div>
                    <div className="singleMovie__reviews__reviewLists">
                      <h2 className="singleMovie__reviews__title">
                        Hamed Ayinde Jimoh
                      </h2>
                      <div className="singleMovie__reviews__details">
                        <div
                          className={`singleMovie__reviews__label ${
                            darkMode
                              ? "singleMovie__reviews__label--darkMode"
                              : "singleMovie__reviews__label--lightMode"
                          }`}
                        >
                          <h2>H</h2>
                        </div>
                        <p>
                          This Movie web application was created using React as
                          the frontend, Redux for state management and TMDB API
                          for fetching the movie data. Thanks for viewing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movies.selectedMovie,
    loading: state.movies.loading,
    darkMode: state.theme.darkTheme,
    similarMovies: state.movies.similarMovies,
    video: state.movies.movieVideo,
    actionMovies: state.movies.actionMovies,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getSingleMovie(id)),
    fetchSimilarMovies: (id) => dispatch(getSimilarMovies(id)),
    fetchMovieVideo: (id) => dispatch(getMovieVideo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchMovie);
