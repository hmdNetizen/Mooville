import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getPopularWarMovies } from "../../../redux";
import Spinner from "../../Spinner";

swiperCore.use([EffectCoverflow, Scrollbar]);

const GetPopularWarMovies = (props) => {
  const {
    popularWarMovies,
    darkMode,
    loading,
    error,
    showPopularWarMovies,
  } = props;
  useEffect(() => {
    showPopularWarMovies();
  }, [showPopularWarMovies]);
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
          Discover Movies (War)
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
          <div className="slider-wrapper">
            {loading ? (
              <Spinner />
            ) : error ? (
              <h2
                className={`carousel__error__heading ${
                  darkMode
                    ? "carousel__error__heading--darkMode"
                    : "carousel__error__heading--lightMode"
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
                {popularWarMovies.map((war) => (
                  <SwiperSlide key={war.id}>
                    <div
                      className={`carousel__poster__wrapper ${
                        darkMode
                          ? "carousel__poster__wrapper--darkMode"
                          : undefined
                      }`}
                    >
                      <Link to={`/movie/${war.id}`}>
                        <img
                          src={`http://image.tmdb.org/t/p/w185/${war.poster_path}`}
                          alt="post"
                          className="carousel__poster"
                          sizes="185px"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularWarMovies: state.movies.popularWarMovies,
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularWarMovies: () => dispatch(getPopularWarMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularWarMovies);
