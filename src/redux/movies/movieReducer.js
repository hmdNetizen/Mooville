import { GET_TRENDING_MOVIES_SUCCESS, SET_LOADING } from "./movieTypes";

const initialState = {
  moviesData: {
    trending: [],
  },
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
    default:
      return state;
  }
};
