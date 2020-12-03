import { combineReducers } from "redux";
import movieReducer from "./movies/movieReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  theme: themeReducer,
});

export default rootReducer;
