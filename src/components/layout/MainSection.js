import React, { Fragment } from "react";
import SearchInput from "../SearchField";
import { connect } from "react-redux";
import FetchTrendingMovie from "../movies/FetchTrendingMovies";
import FetchAllMovies from "../movies/FetchAllMovies";

const MainSection = ({ darkMode }) => {
  return (
    <main className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}>
      <section className="section">
        <Fragment>
          <SearchInput />
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
