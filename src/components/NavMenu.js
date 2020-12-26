import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setOpenDrawer, setValue } from "../redux";

const navLists = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Action", link: "/action" },
  { id: 2, title: "Adventure", link: "/adventure" },
  { id: 3, title: "Animation", link: "/animation" },
  { id: 4, title: "Comedy", link: "/comedy" },
  { id: 5, title: "Documentary", link: "/documentary" },
  { id: 6, title: "Horror", link: "/horror" },
  { id: 7, title: "Romance", link: "/romance" },
  { id: 8, title: "Science Fiction", link: "/science" },
  { id: 9, title: "Thriller", link: "/thriller" },
  { id: 10, title: "War", link: "/war" },
];

const NavMenu = (props) => {
  const { openDrawer, setOpenDrawer, darkMode, value, setValue } = props;
  useEffect(() => {
    [...navLists].forEach((list) => {
      switch (window.location.pathname) {
        case list.link:
          if (value !== list.id) {
            setValue(list.id);
          }
          break;
        default:
          break;
      }
    });
  }, [value, setValue]);

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
              darkMode ? "nav__link__darkMode" : "nav__link__lightMode"
            } ${
              value === list.id ? "nav__link--active" : "nav__link--inactive"
            }`}
            onClick={() => {
              setOpenDrawer(false);
              setValue(list.id);
            }}
          >
            <li
              className={`nav__listItem ${
                darkMode
                  ? "nav__listItem--darkMode"
                  : "nav__listItem--lightMode"
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
    openDrawer: state.utils.openDrawer,
    value: state.utils.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOpenDrawer: (drawer) => dispatch(setOpenDrawer(drawer)),
    setValue: (value) => dispatch(setValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
