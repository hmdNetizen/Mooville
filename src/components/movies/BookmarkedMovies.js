import React from "react";
import { connect } from "react-redux";

const BookmarkedMovies = ({ darkMode }) => {
  return (
    <div
      className={`bookmarked ${
        darkMode ? "bookmarked--darkMode" : "bookmarked--lightMode"
      }`}
    >
      <p
        className={`bookmarked__defaultText ${
          darkMode
            ? "bookmarked__defaultText--darkMode"
            : "bookmarked__defaultText--lightMode"
        }`}
      >
        You currently have no movie bookmarked. Click bookmark on the movie page
        to see it here.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(BookmarkedMovies);
