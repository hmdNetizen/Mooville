import React from "react";
import NavMenu from "../../components/NavMenu";
import SearchField from "../SearchField";
import { connect } from "react-redux";

const MainSection = ({ darkMode }) => {
  return (
    <main className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}>
      <NavMenu />
      <section className="section">
        <SearchField />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(MainSection);
