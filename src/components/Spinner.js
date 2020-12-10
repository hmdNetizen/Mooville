import React from "react";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ darkMode }) => {
  return (
    <div>
      <PuffLoader
        css={override}
        size={100}
        color={darkMode ? "#d1d1d1" : "#c93126"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(Spinner);
