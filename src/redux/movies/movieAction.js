import axios from "axios";
import {
  GET_TRENDING_MOVIES_SUCCESS,
  GET_TRENDING_MOVIES_FAILURE,
  SET_LOADING,
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

const getTrendingMoviesFailure = (error) => {
  return {
    type: GET_TRENDING_MOVIES_FAILURE,
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
    dispatch(getTrendingMoviesFailure(error.message));
  }
};
