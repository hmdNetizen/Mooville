import axios from "axios";
import {
  GET_TRENDING_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_LOADING,
  GET_ACTION_MOVIES_SUCCESS,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
  GET_MOVIES_STATE,
} from "./movieTypes";

const apiKey = "f5205bcd74d03769d95f80b89c9f4db6";

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

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

export const getSingleMovie = (movieId) => async (dispatch) => {
  setLoading();
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    );
    dispatch({
      type: GET_SINGLE_MOVIE,
      payload: response.data,
    });
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    dispatch(getTrendingMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};

export const getActionMovies = () => async (dispatch) => {
  setLoading();
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

export const getSimilarMovies = (movieId) => async (dispatch) => {
  setLoading();
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
  setLoading();
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
  );
  dispatch({
    type: GET_MOVIE_VIDEO,
    payload: response.data.results,
  });
};

export const fetchMovieState = () => (dispatch) => {
  dispatch({
    type: GET_MOVIES_STATE,
  });
};
