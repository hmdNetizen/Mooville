import {
  GET_TRENDING_MOVIES_FAILURE,
  GET_TRENDING_MOVIES_SUCCESS,
  SET_LOADING,
} from "./movieTypes";

const initialState = {
  moviesData: {
    trending: [],
  },
  error: "",
  loading: false,
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
        moviesData: {
          trending: action.payload,
        },
        loading: false,
      };
    case GET_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        movieData: {
          trending: [],
        },
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
