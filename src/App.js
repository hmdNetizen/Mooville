import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./scss/index.css";
import store from "./redux/store";
import MainSection from "./components/layout/MainSection";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/search" component={() => <div>Search</div>} />
          <Route
            exact
            path="/bookmarks"
            component={() => <div>Bookmarks</div>}
          />
        </Switch>
        <div className="container">
          <Header />
          <MainSection openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          <Footer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
