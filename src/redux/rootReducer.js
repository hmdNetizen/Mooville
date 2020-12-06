import { combineReducers } from "redux";
import movieReducer from "./movies/movieReducer";
import themeReducer from "./theme/themeReducer";
import utilsReducer from "./utils/utilsReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  theme: themeReducer,
  utils: utilsReducer,
});

export default rootReducer;
