import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
import MainSection from "./components/layout/MainSection";
import SearchField from "./components/SearchField";
import FetchMovie from "./components/movies/FetchMovie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <MainSection {...props} />}
            />
            <Route
              exact
              path="/movie/:id"
              render={(props) => <FetchMovie {...props} />}
            />
            <Route exact path="/search" component={SearchField} />
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
