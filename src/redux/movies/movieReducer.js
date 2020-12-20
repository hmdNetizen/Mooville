import {
  GET_ACTION_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  SET_LOADING,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
} from "./movieTypes";

const initialState = {
  trending: [],
  actionMovies: [],
  similarMovies: [],
  error: "",
  loading: false,
  selectedMovie: null,
  movieVideo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case GET_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        actionMovies: action.payload,
        loading: false,
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        loading: false,
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        loading: false,
      };
    case GET_MOVIE_VIDEO:
      return {
        ...state,
        movieVideo: action.payload,
        loading: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        trending: [],
        actionMovies: [],
        error: action.payload,
        selectedMovie: null,
        movieVideo: null,
        loading: false,
      };

    default:
      return state;
  }
};
