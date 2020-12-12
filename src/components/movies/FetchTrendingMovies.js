import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../redux";
import Spinner from "../Spinner";

swiperCore.use([EffectCoverflow, Scrollbar]);

const FetchTrendingMovie = (props) => {
  const { showTrendingMovies, trending, darkMode, loading, error } = props;
  useEffect(() => {
    showTrendingMovies();
  }, [showTrendingMovies]);
  return (
    <section className="trending">
      <h2
        className={`trending__heading ${
          darkMode
            ? "trending__heading--darkMode"
            : "trending__heading--lightMode"
        }`}
      >
        Trending Now
      </h2>
      <div className="slider-wrapper">
        {loading ? (
          <Spinner />
        ) : error ? (
          <h2
            className={`trending__error__heading ${
              darkMode
                ? "trending__error__heading--darkMode"
                : "trending__error__heading--lightMode"
            }`}
          >
            Unknown Server Error!
          </h2>
        ) : (
          <Swiper
            // spaceBetween={50}
            centeredSlides={true}
            effect="coverflow"
            height={250}
            width={170}
            style={{ borderRadius: 20 }}
          >
            {trending.map((trend) => (
              <SwiperSlide
                key={trend.id}
                stle={{ borderRadius: "20px !important" }}
              >
                <div
                  className={`trending__poster__wrapper ${
                    darkMode ? "trending__poster__wrapper--darkMode" : undefined
                  }`}
                >
                  <Link to={`/movie/${trend.id}`}>
                    <img
                      src={`http://image.tmdb.org/t/p/w185/${trend.poster_path}`}
                      alt="post"
                      className="trending__poster"
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
    trending: state.movies.trending,
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTrendingMovies: () => dispatch(getTrendingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTrendingMovie);
