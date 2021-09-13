import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import { connect } from "react-redux";
import Spinner from "../Spinner";

SwiperCore.use([EffectCoverflow]);

const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=185&h=231&q=60";

const Trending = ({ movies, loading, error, darkMode }) => {
  return (
    <div className="slider-wrapper" style={{ overflow: "hidden" }}>
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
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className={`carousel__poster__wrapper ${
                  darkMode ? "carousel__poster__wrapper--darkMode" : undefined
                }`}
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`${
                      movie.poster_path
                        ? "http://image.tmdb.org/t/p/w185/" + movie.poster_path
                        : makeshiftPoster
                    }`}
                    alt={`${movie.title || movie.name} poster`}
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
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    darkMode: state.theme.darkTheme,
    error: state.movies.error,
  };
};

export default connect(mapStateToProps)(Trending);
