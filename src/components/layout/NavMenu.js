import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const navLists = [
  { id: 0, title: "Action", link: "/" },
  { id: 1, title: "Adventure", link: "/" },
  { id: 2, title: "Animation", link: "/" },
  { id: 3, title: "Commedy", link: "/" },
  { id: 4, title: "Documentary", link: "/" },
  { id: 5, title: "Horror", link: "/" },
  { id: 6, title: "Romance", link: "/" },
  { id: 7, title: "Science Fiction", link: "/" },
  { id: 8, title: "Thriller", link: "/" },
];

const NavMenu = ({ openDrawer, setOpenDrawer, darkMode }) => {
  console.log(darkMode);
  return (
    <nav
      className={`nav ${openDrawer ? "nav__menu--open" : "nav__menu--close"} ${
        darkMode ? "nav__menu--darkMode" : "nav__menu--lightMode"
      }`}
    >
      <h2
        className={`nav__heading ${
          darkMode ? "nav__heading--darkMode" : "nav__heading--lightMode"
        }`}
      >
        Select Category
      </h2>
      <ul className="nav__list">
        {navLists.map((list) => (
          <Link
            key={list.id}
            to={list.link}
            className={`nav__link ${
              darkMode ? "nav__link--darkMode" : "nav__link--lightMode"
            }`}
            onClick={() => setOpenDrawer(false)}
          >
            <li
              className={`nav__listItem ${
                darkMode ? "nav__listItem--darkMode" : undefined
              }`}
            >
              {list.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(NavMenu);
