import React, { Fragment, useState } from "react";
import SwitchButton from "../SwitchButton";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <Fragment>
      <header
        className={`header ${
          props.darkMode ? "header__darkMode" : "header__lightMode"
        } `}
      >
        <h1 className="header__logo">Mooville</h1>
        <div className="header__switch">
          <SwitchButton />
        </div>
      </header>
      <div className="toolbar"></div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(Header);
