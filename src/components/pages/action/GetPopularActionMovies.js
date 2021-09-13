import React, { useEffect } from "react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getPopularActionMovies } from "../../../redux";
import Trending from "../../movies/Trending";

swiperCore.use([EffectCoverflow, Scrollbar]);

const GetPopularActionMovies = (props) => {
  const { popularActionMovies, darkMode, showPopularActionMovies } = props;
  useEffect(() => {
    showPopularActionMovies();
  }, [showPopularActionMovies]);
  return (
    <section
      className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}
    >
      <div className="genres">
        <h1
          className={`genres__title ${
            darkMode ? "genres__title--darkMode" : "genres__title--lightMode"
          }`}
        >
          Discover Movies (Action)
        </h1>
        <div className="carousel">
          <h2
            className={`carousel__heading ${
              darkMode
                ? "carousel__heading--darkMode"
                : "carousel__heading--lightMode"
            }`}
          >
            Most Popular (2020)
          </h2>
          <Trending movies={popularActionMovies} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularActionMovies: state.movies.popularActionMovies,
    darkMode: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularActionMovies: () => dispatch(getPopularActionMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularActionMovies);
