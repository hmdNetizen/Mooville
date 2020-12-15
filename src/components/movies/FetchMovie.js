import React, { Fragment, useEffect, useState } from "react";
// import { cloneDeep } from "lodash";
import { connect } from "react-redux";
import { getSingleMovie } from "./../../redux";
import StarRating from "../StarRating";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

// This component fetches individual movies based on the movie user clicked
const FetchMovie = (props) => {
  const { movie, getMovie, match, loading, darkMode } = props;
  const [bookmarked, setBookmarked] = useState(false);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    getMovie(match.params.id);
  }, [getMovie, match]);
  //   console.log(movie);
  return (
    <section className="singleMovie">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className={`singleMovie__wrapper ${
            darkMode
              ? "singleMovie__wrapper--darkMode"
              : "singleMovie__wrapper--lightMode"
          }`}
        >
          <div className="singleMovie__video">
            <iframe
              title={movie.title}
              width="420"
              height="345"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&controls=0"
              className="singleMovie__videoPlayer"
            ></iframe>
          </div>
          <div
            className={`singleMovie__description ${
              darkMode
                ? "singleMovie__description--darkMode"
                : "singleMovie__description-lightMode"
            }`}
          >
            <h2 className="singleMovie__title">{movie.title}</h2>
            <Fragment>
              <StarRating rating={Math.ceil(movie.vote_average / 2)} />
            </Fragment>

            <p className="singleMovie__overview">{movie.overview}</p>
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
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    loading: state.utils.loading,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getSingleMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchMovie);
