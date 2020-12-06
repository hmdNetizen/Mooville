import { SET_VALUE, SET_OPEN_DRAWER, SET_SELECTED_MENU } from "./utilsTypes";

const initialState = {
  value: 0,
  openDrawer: false,
  selectedMenu: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case SET_OPEN_DRAWER:
      return {
        ...state,
        openDrawer: action.payload,
      };
    case SET_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };

    default:
      return state;
  }
};
