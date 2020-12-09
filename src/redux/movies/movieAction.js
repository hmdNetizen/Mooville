import axios from "axios";
import {
  GET_TRENDING_MOVIES_SUCCESS,
  GET_TRENDING_MOVIES_FAILURE,
} from "./movieTypes";

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
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f5205bcd74d03769d95f80b89c9f4db6"
    );
    dispatch(getTrendingMoviesSuccess(response.data.results));
    console.log(response);
  } catch (error) {
    dispatch(getTrendingMoviesFailure(error.message));
  }
};
