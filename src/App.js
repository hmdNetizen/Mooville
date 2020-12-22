import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import NavMenu from "./components/NavMenu";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
import MainSection from "./components/layout/MainSection";
import SearchInput from "./components/SearchField";
import FetchMovie from "./components/movies/FetchMovie";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchedMovie from "./components/movies/SearchedMovie";

function App() {
  const matchesSM = useMediaQuery("(max-width: 960px)");
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <NavMenu />
        <div className="container">
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
                    <SearchedMovie />
                  </Fragment>
                )}
              />
            )}

            <Route
              exact
              path="/bookmarks"
              component={() => <div>Bookmarks</div>}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
