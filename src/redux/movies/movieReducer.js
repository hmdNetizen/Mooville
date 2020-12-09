import { GET_TRENDING_MOVIES_SUCCESS } from "./movieTypes";

const initialState = {
  moviesData: {
    trending: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        moviesData: {
          trending: action.payload,
        },
      };
    default:
      return state;
  }
};
