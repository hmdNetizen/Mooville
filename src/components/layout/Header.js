import React, { Fragment } from "react";
import SwitchButton from "../SwitchButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header
        className={`header ${
          props.darkMode ? "header__darkMode" : "header__lightMode"
        } `}
      >
        <Link to="/">
          <h1 className="header__logo">Mooville</h1>
        </Link>
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
