import {
  GET_ACTION_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  SET_LOADING,
  GET_SINGLE_MOVIE,
} from "./movieTypes";

const initialState = {
  trending: [],
  actionMovies: [],
  error: "",
  loading: false,
  movie: {},
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
        movie: action.payload,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        trending: [],
        actionMovies: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
