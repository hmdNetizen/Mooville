import { SET_DARK_THEME } from "./themeTypes";
const initialState = {
  darkTheme: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};
