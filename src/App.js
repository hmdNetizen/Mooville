import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import NavMenu from "./components/NavMenu";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
import Routes from "./components/Routes";
import ScrollToView from "./components/utils/ScrollToView";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToView>
          <Header />
          <NavMenu />
          <div className="container">
            <Routes />
          </div>
          <Footer />
        </ScrollToView>
      </Router>
    </Provider>
  );
}

export default App;
