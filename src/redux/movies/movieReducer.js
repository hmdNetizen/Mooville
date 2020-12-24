import {
  GET_ACTION_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  GET_SINGLE_MOVIE,
  GET_SIMILAR_MOVIES,
  GET_MOVIE_VIDEO,
  GET_SEARCHED_MOVIES,
  GET_POPULAR_ADVENTURE_MOVIES,
  GET_ADVENTURE_MOVIES,
} from "./movieTypes";

const initialState = {
  trending: [],
  actionMovies: [],
  similarMovies: [],
  searchedMovies: [],
  popularAdventureMovies: [],
  adventureMovies: [],
  error: "",
  loading: true,
  selectedMovie: null,
  movieVideo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
        error: "",
      };
    case GET_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        actionMovies: action.payload,
        loading: false,
        error: "",
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
    case GET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: action.payload,
        loading: false,
      };
    case GET_POPULAR_ADVENTURE_MOVIES:
      return {
        ...state,
        popularAdventureMovies: action.payload,
        loading: false,
      };
    case GET_ADVENTURE_MOVIES:
      return {
        ...state,
        adventureMovies: action.payload,
        loading: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        trending: [],
        actionMovies: [],
        searchedMovies: [],
        popularAdventureMovies: [],
        adventureMovies: [],
        error: action.payload,
        selectedMovie: null,
        movieVideo: null,
        loading: false,
      };

    default:
      return state;
  }
};
