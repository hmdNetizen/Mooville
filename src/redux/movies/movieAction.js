import axios from "axios";
import {
  GET_TRENDING_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_ACTION_MOVIES_SUCCESS,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
  GET_SEARCHED_MOVIES,
  GET_POPULAR_ACTION_MOVIES,
  GET_POPULAR_ADVENTURE_MOVIES,
  GET_POPULAR_ANIMATION_MOVIES,
  GET_POPULAR_COMEDY_MOVIES,
  GET_POPULAR_DOCUMENTARY_MOVIES,
  GET_POPULAR_HORROR_MOVIES,
  GET_POPULAR_ROMANCE_MOVIES,
  GET_POPULAR_SCIENCE_MOVIES,
  GET_POPULAR_THRILLER_MOVIES,
  GET_POPULAR_WAR_MOVIES,
  GET_ADVENTURE_MOVIES,
  GET_ANIMATION_MOVIES,
  GET_COMEDY_MOVIES,
  GET_DOCUMENTARY_MOVIES,
  GET_HORROR_MOVIES,
  GET_ROMANCE_MOVIES,
  GET_SCIENCE_FICTION_MOVIES,
  GET_THRILLER_MOVIES,
  GET_WAR_MOVIES,
  GET_UPCOMING_ACTION_MOVIES,
  GET_UPCOMING_ADVENTURE_MOVIES,
  GET_UPCOMING_ANIMATION_MOVIES,
  GET_UPCOMING_COMEDY_MOVIES,
  GET_UPCOMING_DOCUMENTARY_MOVIES,
  GET_UPCOMING_HORROR_MOVIES,
  GET_UPCOMING_ROMANCE_MOVIES,
  GET_UPCOMING_SCIENCE_FICTION_MOVIES,
  GET_UPCOMING_THRILLER_MOVIES,
  GET_UPCOMING_WAR_MOVIES,
  GET_VIEWED_MOVIES,
  GET_BOOKMARKED_MOVIES,
} from "./movieTypes";

const apiKey = "f5205bcd74d03769d95f80b89c9f4db6";

const getTrendingMoviesSuccess = (success) => {
  return {
    type: GET_TRENDING_MOVIES_SUCCESS,
    payload: success,
  };
};

const getMoviesFailure = (error) => {
  return {
    type: GET_MOVIES_FAILURE,
    payload: error,
  };
};

// Viewed movies action creator
export const displayViewedMovies = (viewed) => {
  return {
    type: GET_VIEWED_MOVIES,
    payload: viewed,
  };
};

export const getSingleMovie = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    );
    dispatch({
      type: GET_SINGLE_MOVIE,
      payload: response.data,
    });

    if (response.data) {
      const data = [];
      data.push(response.data);
      dispatch(displayViewedMovies(data));
    }
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getBookmarkedMovies = (id) => {
  return {
    type: GET_BOOKMARKED_MOVIES,
    payload: id,
  };
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    dispatch(getTrendingMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Action Movies

export const getPopularActionMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=28`
    );

    dispatch({
      type: GET_POPULAR_ACTION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );

    dispatch({
      type: GET_ACTION_MOVIES_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingActionMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=28
      `
    );

    dispatch({
      type: GET_UPCOMING_ACTION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    const limitResponse = response.data.results.slice(1, 7);

    dispatch({
      type: GET_SIMILAR_MOVIES,
      payload: limitResponse,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getMovieVideo = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_VIDEO,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getSearchedMovies = (searched) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searched}&page=1&include_adult=false`
    );
    const filteredResponse = response.data.results.filter(
      (filtered) =>
        filtered.media_type === "movie" || filtered.media_type === "tv"
    );

    dispatch({
      type: GET_SEARCHED_MOVIES,
      payload: filteredResponse,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Adventure Movies
export const getPopularAdventureMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020&with_genres=12`
    );

    dispatch({
      type: GET_POPULAR_ADVENTURE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getAdventureMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=12`
    );

    dispatch({
      type: GET_ADVENTURE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingAdventureMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=f5205bcd74d03769d95f80b89c9f4db6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=12`
    );

    dispatch({
      type: GET_UPCOMING_ADVENTURE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Animation movies
export const getPopularAnimationMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=f5205bcd74d03769d95f80b89c9f4db6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=16`
    );

    dispatch({
      type: GET_POPULAR_ANIMATION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getAnimationMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=16`
    );

    dispatch({
      type: GET_ANIMATION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingAnimationMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=16`
    );

    dispatch({
      type: GET_UPCOMING_ANIMATION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Comedy Movies

export const getPopularComedyMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=35`
    );

    dispatch({
      type: GET_POPULAR_COMEDY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35`
    );

    dispatch({
      type: GET_COMEDY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingComedyMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=35`
    );

    dispatch({
      type: GET_UPCOMING_COMEDY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Documentary Movies
export const getPopularDocumentaryMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=99`
    );

    dispatch({
      type: GET_POPULAR_DOCUMENTARY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getDocumentaryMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99`
    );

    dispatch({
      type: GET_DOCUMENTARY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingDocumentaryMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=99`
    );

    dispatch({
      type: GET_UPCOMING_DOCUMENTARY_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Horror Movies
export const getPopularHorrorMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=27`
    );

    dispatch({
      type: GET_POPULAR_HORROR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27`
    );

    dispatch({
      type: GET_HORROR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingHorrorMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=27`
    );

    dispatch({
      type: GET_UPCOMING_HORROR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Romance movies
export const getPopularRomanceMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=10749`
    );

    dispatch({
      type: GET_POPULAR_ROMANCE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10749`
    );

    dispatch({
      type: GET_ROMANCE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingRomanceMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=10749`
    );

    dispatch({
      type: GET_UPCOMING_ROMANCE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Science Fiction movies
export const getPopularScienceMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=878`
    );

    dispatch({
      type: GET_POPULAR_SCIENCE_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getScienceFictionMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=878`
    );

    dispatch({
      type: GET_SCIENCE_FICTION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingScienceFictionMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `
      https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=878`
    );

    dispatch({
      type: GET_UPCOMING_SCIENCE_FICTION_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// Thriller movies
export const getPopularThrillerMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=53`
    );

    dispatch({
      type: GET_POPULAR_THRILLER_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getThrillerMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=53`
    );

    dispatch({
      type: GET_THRILLER_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingThrillerMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=53`
    );

    dispatch({
      type: GET_UPCOMING_THRILLER_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

// War Movies
export const getPopularWarMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2020&with_genres=10752`
    );

    dispatch({
      type: GET_POPULAR_WAR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getWarMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10752`
    );

    dispatch({
      type: GET_WAR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getUpcomingWarMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=10752`
    );

    dispatch({
      type: GET_UPCOMING_WAR_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};
