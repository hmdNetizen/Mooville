import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setDarkTheme } from "./../redux";

const SwitchButton = (props) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        checked={props.darkMode}
        onChange={props.setDarkMode}
      />
      <label htmlFor="checkbox" className="checkbox__label">
        <i className="fas fa-moon checkbox__icon checkbox__icon--moon"></i>
        <i className="fas fa-sun checkbox__icon checkbox__icon--sun"></i>
        <div className="ball checkbox__ball"></div>
      </label>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDarkMode: () => dispatch(setDarkTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
