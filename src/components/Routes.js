import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/Homepage";
import FetchMovie from "./movies/FetchMovie";
import SearchInput from "./SearchInput";
import SearchedMovies from "./movies/SearchedMovies";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import GetPopularActionMovies from "./pages/action/GetPopularActionMovies";
import GetPopularAdventureMovies from "./pages/adventure/GetPopularAdventureMovies";
import GetPopularAnimationMovies from "./pages/animation/GetPopularAnimationMovies";
import GetPopularComedyMovies from "./pages/comedy/GetPopularComedyMovies";
import GetPopularDocumentaryMovies from "./pages/documentary/GetPopularDocumentaryMovies";
import GetPopularHorrorMovies from "./pages/horror/GetPopularHorrorMovies";
import GetPopularRomanceMovies from "./pages/romance/GetPopularRomanceMovies";
import GetPopularScienceMovies from "./pages/science/GetPopularScienceMovies";
import GetPopularThrillerMovies from "./pages/thriller/GetPopularThrillerMovies";
import GetPopularWarMovies from "./pages/war/GetPopularWarMovies";
import GetAdventureMovies from "./pages/adventure/GetAdventureMovies";
import GetAnimationMovies from "./pages/animation/GetAnimationMovies";
import GetActionMovies from "./pages/action/GetActionMovies";
import GetComedyMovies from "./pages/comedy/GetComedyMovies";
import GetDocumentaryMovies from "./pages/documentary/GetDocumentaryMovies";
import GetHorrorMovies from "./pages/horror/GetHorrorMovies";
import GetRomanceMovies from "./pages/romance/GetRomanceMovies";
import GetScienceFictionMovies from "./pages/science/GetScienceFictionMovies";
import GetThrillerMovies from "./pages/thriller/GetThrillerMovies";
import GetWarMovies from "./pages/war/GetWarMovies";
import GetUpcomingActionMovies from "./pages/action/GetUpcomingActionMovies";
import GetUpcomingAdventureMovies from "./pages/adventure/GetUpcomingAdventureMovies";
import GetUpcomingAnimationMovies from "./pages/animation/GetUpcomingAnimationMovies";
import GetUpcomingComedyMovies from "./pages/comedy/GetUpcomingComedyMovies";
import GetUpcomingDocumentaryMovies from "./pages/documentary/GetUpcomingDocumentaryMovies";
import GetUpcomingHorrorMovies from "./pages/horror/GetUpcomingHorrorMovies";
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
        path="/action"
        render={() => (
          <Fragment>
            <GetPopularActionMovies />
            <GetUpcomingActionMovies />
            <GetActionMovies />
          </Fragment>
        )}
      />
      <Route
        exact
        path="/adventure"
        render={(props) => (
          <Fragment>
            <GetPopularAdventureMovies {...props} />
            <GetUpcomingAdventureMovies />
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
            <GetUpcomingAnimationMovies />
            <GetAnimationMovies />
          </Fragment>
        )}
      />

      <Route
        exact
        path="/comedy"
        render={() => (
          <Fragment>
            <GetPopularComedyMovies />
            <GetUpcomingComedyMovies />
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
            <GetUpcomingDocumentaryMovies />
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
            <GetUpcomingHorrorMovies />
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
