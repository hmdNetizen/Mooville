import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Footer = ({ darkMode, openDrawer, setOpenDrawer }) => {
  return (
    <footer
      className={`footer ${
        darkMode ? "footer__darkMode" : "footer__lightMode"
      }`}
    >
      <ul className="footer__list">
        <Link to="/" className="footer__link">
          <li className="footer__list__item">
            <i className="fas fa-home list__item__icon"></i>
            <p className="list__item__text">Home</p>
          </li>
        </Link>
        <Link to="/search" className="footer__link">
          <li className="footer__list__item">
            <i className="fas fa-search list__item__icon"></i>
            <p className="list__item__text">Search</p>
          </li>
        </Link>
        <Link to="/bookmarks" className="footer__link">
          <li className="footer__list__item">
            <i className="far fa-bookmark list__item__icon"></i>
            <p className="list__item__text">Bookmarks</p>
          </li>
        </Link>
        <li
          className={`footer__list__item ${
            darkMode
              ? "footer__list__item--darkMode"
              : "footer__list__item--lightMode"
          }`}
          onClick={() => setOpenDrawer((prev) => !prev)}
        >
          {!openDrawer ? (
            <i className="fas fa-bars list__item__icon"></i>
          ) : (
            <i className="fas fa-times list__item__icon"></i>
          )}

          <p className="list__item__text">Menu</p>
        </li>
      </ul>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(Footer);
