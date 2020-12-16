import {
  GET_ACTION_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  SET_LOADING,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
  GET_MOVIES_STATE,
} from "./movieTypes";

const initialState = {
  trending: [],
  actionMovies: [],
  similarMovies: [],
  error: "",
  loading: false,
  selectedMovie: {},
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
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
      };
    case GET_MOVIE_VIDEO:
      return {
        ...state,
        movieVideo: action.payload,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        trending: [],
        actionMovies: [],
        error: action.payload,
        loading: false,
      };

    case GET_MOVIES_STATE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
