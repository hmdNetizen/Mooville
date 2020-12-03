import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
import NavMenu from "./components/layout/NavMenu";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <NavMenu />
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
