import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import MainSection from "./layout/MainSection";
import FetchMovie from "./movies/FetchMovie";
import SearchInput from "./SearchInput";
import SearchedMovies from "./movies/SearchedMovies";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import GetAdventureMovies from "./pages/GetAdventureMovies";

const Routes = ({ searched }) => {
  const matchesSM = useMediaQuery("(max-width: 960px)");
  return (
    <Switch>
      <Route
        exact
        path="/"
        strict
        render={(props) => <MainSection {...props} />}
      />
      <Route
        exact
        path="/movie/:id"
        render={(props) => <FetchMovie {...props} />}
      />
      {matchesSM && (
        <Route
          exact
          path="/search"
          render={(props) => (
            <Fragment>
              <SearchInput />
              {searched && searched.length > 0 && <SearchedMovies {...props} />}
            </Fragment>
          )}
        />
      )}

      <Route exact path="/bookmarks" component={() => <div>Bookmarks</div>} />
      <Route exact path="/adventure" component={GetAdventureMovies} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    searched: state.movies.searchedMovies,
  };
};

export default connect(mapStateToProps)(Routes);
