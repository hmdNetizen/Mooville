import React, { Fragment } from "react";
import NavMenu from "../../components/NavMenu";
import SearchField from "../SearchField";
import { connect } from "react-redux";
import FetchTrendingMovie from "../movies/FetchTrendingMovies";
import FetchAllMovies from "../movies/FetchAllMovies";

const MainSection = ({ darkMode }) => {
  return (
    <main className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}>
      <NavMenu />
      <section className="section">
        <Fragment>
          <SearchField />
        </Fragment>
        <Fragment>
          <FetchTrendingMovie />
        </Fragment>
        <Fragment>
          <FetchAllMovies />
        </Fragment>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(MainSection);
