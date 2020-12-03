import { GET_MOVIES } from "./movieTypes";
const initialState = {
  movies: [
    { id: 0, name: "The Legend of the seeker", genre: "Adventure" },
    { id: 1, name: "Exit plan", genre: "Action" },
    { id: 2, name: "The conjuring", genre: "Horror" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: state.movies[1],
      };
    default:
      return state;
  }
};
