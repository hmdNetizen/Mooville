import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import NavMenu from "./components/NavMenu";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
// import MainSection from "./components/layout/MainSection";
// import FetchMovie from "./components/movies/FetchMovie";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import SearchedMovie from "./components/movies/SearchedMovies";
// import SearchInput from "./components/SearchInput";
import Routes from "./components/Routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <NavMenu />
        <div className="container">
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
