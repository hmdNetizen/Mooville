import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getTrendingMovies } from "../redux";
import Spinner from "./Spinner";

swiperCore.use([EffectCoverflow, Scrollbar]);

// const demoMovies = [
//   { id: 0, poster: sampleImg },
//   { id: 1, poster: sampleImg2 },
//   { id: 2, poster: sampleImg3 },
//   { id: 3, poster: sampleImg4 },
//   { id: 4, poster: sampleImg5 },
//   { id: 5, poster: sampleImg6 },
// ];

const FetchTrendingMovie = (props) => {
  const { showTrendingMovies, trending, darkMode, loading } = props;
  useEffect(() => {
    showTrendingMovies();
  }, [showTrendingMovies]);
  return (
    <section className="trendingCard">
      <h2
        className={`trendingCard__heading ${
          darkMode
            ? "trendingCard__heading--darkMode"
            : "trendingCard__heading--lightMode"
        }`}
      >
        Trending Now
      </h2>
      <div className="slider-wrapper">
        {loading ? (
          <Spinner />
        ) : (
          <Swiper
            // spaceBetween={50}
            centeredSlides={true}
            effect="coverflow"
            height={250}
            width={170}
          >
            {trending.map((trend) => (
              <SwiperSlide
                key={trend.id}
                stle={{ borderRadius: "20px !important" }}
              >
                <div
                  className={`trendingCard__poster__wrapper ${
                    darkMode
                      ? "trendingCard__poster__wrapper--darkMode"
                      : undefined
                  }`}
                >
                  <Link to="/">
                    <img
                      src={`http://image.tmdb.org/t/p/w185/${trend.poster_path}`}
                      alt="post"
                      className="trendingCard__poster"
                      sizes="185px"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    trending: state.movies.moviesData.trending,
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTrendingMovies: () => dispatch(getTrendingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTrendingMovie);
