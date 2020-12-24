import React, { Fragment } from "react";
import SearchInput from "../SearchInput";
import { connect } from "react-redux";
import FetchTrendingMovie from "../movies/FetchTrendingMovies";
import FetchAllMovies from "../movies/FetchAllMovies";
import SearchedMovie from "../movies/SearchedMovies";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MainSection = ({ darkMode, searched }) => {
  const matchesSM = useMediaQuery("(max-width: 960px)");
  return (
    <main className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}>
      <section className="section">
        {!matchesSM && <SearchInput />}
        {!matchesSM && searched && searched.length > 0 && <SearchedMovie />}
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
    searched: state.movies.searchedMovies,
  };
};

export default connect(mapStateToProps)(MainSection);
