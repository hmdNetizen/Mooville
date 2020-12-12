import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";

const StarRating = ({ rating, darkMode }) => {
  return (
    <StarRatingComponent
      name="rating"
      editing={false}
      renderStarIcon={() => <i className="fas fa-star movie__star__icon"></i>}
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
