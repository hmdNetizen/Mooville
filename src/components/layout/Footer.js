import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenDrawer } from "./../../redux/";
import { setSelectedMenu } from "./../../redux/utils/utilsAction";

const Footer = (props) => {
  const {
    darkMode,
    openDrawer,
    setOpenDrawer,
    selectedMenu,
    setSelectedMenu,
  } = props;
  const footerMenus = [
    {
      id: 0,
      title: "Home",
      icon: "fas fa-home",
      path: "/",
      description: "Footer home icon",
    },
    {
      id: 1,
      title: "Search",
      icon: "fas fa-search",
      path: "/search",
      description: "Footer search icon",
    },
    {
      id: 2,
      title: "Bookmarks",
      icon: "far fa-bookmark",
      path: "/bookmarks",
      description: "Footer saved bookmarks icon",
    },
  ];

  useEffect(() => {
    [...footerMenus].forEach((menu) => {
      switch (window.location.pathname) {
        case menu.path:
          if (selectedMenu !== menu.id) {
            setSelectedMenu(menu.id);
          }
          break;
        default:
          break;
      }
    });
  });
  return (
    <footer
      className={`footer ${
        darkMode ? "footer__darkMode" : "footer__lightMode"
      }`}
    >
      <ul className="footer__list">
        {footerMenus.map((menu) => (
          <Link
            key={menu.id}
            to={menu.path}
            className={`footer__link ${
              darkMode && selectedMenu === menu.id && "footer__link--darkActive"
            } ${
              !darkMode &&
              selectedMenu === menu.id &&
              "footer__link--lightActive"
            }`}
            onClick={() => {
              setOpenDrawer(false);
              setSelectedMenu(menu.id);
            }}
          >
            <li className="footer__list__item">
              <i
                className={`${menu.icon} list__item__icon`}
                title={menu.description}
              ></i>
              <p className="list__item__text">{menu.title}</p>
            </li>
          </Link>
        ))}
        <li
          className={`footer__list__item ${
            darkMode
              ? "footer__list__item--darkMode"
              : "footer__list__item--lightMode"
          }`}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          {!openDrawer ? (
            <i
              className="fas fa-bars list__item__icon"
              title="Footer open menu"
            ></i>
          ) : (
            <i
              className="fas fa-times list__item__icon"
              title="Footer close menu"
            ></i>
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
    openDrawer: state.utils.openDrawer,
    selectedMenu: state.utils.selectedMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOpenDrawer: (openDrawer) => dispatch(setOpenDrawer(openDrawer)),
    setSelectedMenu: (selectedMenu) => dispatch(setSelectedMenu(selectedMenu)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
