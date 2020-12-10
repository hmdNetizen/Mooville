import axios from "axios";
import {
  GET_TRENDING_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_LOADING,
  GET_ACTION_MOVIES_SUCCESS,
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

const getActionMoviesSuccess = (success) => {
  return {
    type: GET_ACTION_MOVIES_SUCCESS,
    payload: success,
  };
};

export const getActionMovies = () => async (dispatch) => {
  setLoading();
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );

    dispatch(getActionMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
  }
};
