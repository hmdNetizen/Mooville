import React from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  return (
    <footer
      className={`footer ${
        props.darkMode ? "footer__darkMode" : "footer__lightMode"
      }`}
    >
      <ul className="footer__list">
        <a href="/" className="footer__link">
          <li className="footer__list__item">
            <i className="fas fa-home list__item__icon"></i>
            <p className="list__item__text">Home</p>
          </li>
        </a>
        <a href="/" className="footer__link">
          <li className="footer__list__item">
            <i className="fas fa-search list__item__icon"></i>
            <p className="list__item__text">Search</p>
          </li>
        </a>
        <a href="/" className="footer__link">
          <li className="footer__list__item">
            <i className="far fa-bookmark list__item__icon"></i>
            <p className="list__item__text">Bookmarks</p>
          </li>
        </a>
        <a href="/" className="footer__link">
          <li className="footer__list__item">
            <i className="fas fa-bars list__item__icon"></i>
            <p className="list__item__text">Menu</p>
          </li>
        </a>
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
