import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/Homepage";
import FetchMovie from "./movies/FetchMovie";
import SearchInput from "./SearchInput";
import SearchedMovies from "./movies/SearchedMovies";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import GetPopularActionMovies from "./pages/GetPopularActionMovies";
import GetPopularAdventureMovies from "./pages/GetPopularAdventureMovies";
import GetPopularAnimationMovies from "./pages/GetPopularAnimationMovies";
import GetPopularComedyMovies from "./pages/GetPopularComedyMovies";
import GetPopularDocumentaryMovies from "./pages/GetPopularDocumentaryMovies";
import GetPopularHorrorMovies from "./pages/GetPopularHorrorMovies";
import GetPopularRomanceMovies from "./pages/GetPopularRomanceMovies";
import GetPopularScienceMovies from "./pages/GetPopularScienceMovies";
import GetPopularThrillerMovies from "./pages/GetPopularThrillerMovies";
import GetPopularWarMovies from "./pages/GetPopularWarMovies";
import GetAdventureMovies from "./pages/GetAdventureMovies";
import GetAnimationMovies from "./pages/GetAnimationMovies";
import GetActionMovies from "./pages/GetActionMovies";
import GetComedyMovies from "./pages/GetComedyMovies";
import GetDocumentaryMovies from "./pages/GetDocumentaryMovies";
import GetHorrorMovies from "./pages/GetHorrorMovies";
import GetRomanceMovies from "./pages/GetRomanceMovies";
import GetScienceFictionMovies from "./pages/GetScienceFictionMovies";
import GetThrillerMovies from "./pages/GetThrillerMovies";
import GetWarMovies from "./pages/GetWarMovies";
import BookmarkedMovies from "./movies/BookmarkedMovies";

const Routes = ({ searched }) => {
  const matchesSM = useMediaQuery("(max-width: 960px)");
  return (
    <Switch>
      <Route
        exact
        path="/"
        strict
        render={(props) => <Homepage {...props} />}
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

      <Route exact path="/bookmarks" component={BookmarkedMovies} />
      <Route
        exact
        path="/adventure"
        render={(props) => (
          <Fragment>
            <GetPopularAdventureMovies {...props} />
            <GetAdventureMovies {...props} />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/animation"
        render={(props) => (
          <Fragment>
            <GetPopularAnimationMovies />
            <GetAnimationMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/action"
        render={() => (
          <Fragment>
            <GetPopularActionMovies />
            <GetActionMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/comedy"
        render={() => (
          <Fragment>
            <GetPopularComedyMovies />
            <GetComedyMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/documentary"
        render={() => (
          <Fragment>
            <GetPopularDocumentaryMovies />
            <GetDocumentaryMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/horror"
        render={() => (
          <Fragment>
            <GetPopularHorrorMovies />
            <GetHorrorMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/romance"
        render={() => (
          <Fragment>
            <GetPopularRomanceMovies />
            <GetRomanceMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/science"
        render={() => (
          <Fragment>
            <GetPopularScienceMovies />
            <GetScienceFictionMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/thriller"
        render={() => (
          <Fragment>
            <GetPopularThrillerMovies />
            <GetThrillerMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/war"
        render={() => (
          <Fragment>
            <GetPopularWarMovies />
            <GetWarMovies />
          </Fragment>
        )}
      />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    searched: state.movies.searchedMovies,
  };
};

export default connect(mapStateToProps)(Routes);
