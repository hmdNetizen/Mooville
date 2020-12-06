import { SET_OPEN_DRAWER, SET_VALUE, SET_SELECTED_MENU } from "./utilsTypes";
export const setOpenDrawer = (drawer) => {
  return {
    type: SET_OPEN_DRAWER,
    payload: drawer,
  };
};

export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value,
  };
};

export const setSelectedMenu = (selected) => {
  return {
    type: SET_SELECTED_MENU,
    payload: selected,
  };
};
