import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";

const StarRating = ({ rating, darkMode }) => {
  return (
    <StarRatingComponent
      editing={false}
      renderStarIcon={() => (
        <i class="fas fa-star" style={{ fontSize: 15 }}></i>
      )}
      starCount={5}
      value={rating}
      emptyStarColor={darkMode ? "#8c8c8c" : undefined}
      starColor={darkMode ? "#d3a43f" : "#c93126"}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(StarRating);
