import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getUpcomingWarMovies } from "../../../redux";
import Spinner from "../../Spinner";

swiperCore.use([EffectCoverflow, Scrollbar]);
const makeshiftPoster =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=185&h=231&q=60";

const GetUpcomingWarMovies = (props) => {
  const {
    showUpcomingWarMovies,
    upcomingWarMovies,
    darkMode,
    loading,
    error,
  } = props;
  useEffect(() => {
    showUpcomingWarMovies();
  }, [showUpcomingWarMovies]);
  return (
    <section
      className={`main adventureMovies ${
        darkMode ? "main__darkMode" : "main__lightMode"
      }`}
    >
      <div className="section">
        <div className="carousel">
          <h2
            className={`carousel__heading ${
              darkMode
                ? "carousel__heading--darkMode"
                : "carousel__heading--lightMode"
            }`}
          >
            Upcoming (2021)
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
                {upcomingWarMovies.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <div
                      className={`carousel__poster__wrapper ${
                        darkMode
                          ? "carousel__poster__wrapper--darkMode"
                          : undefined
                      }`}
                    >
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`${
                            movie.poster_path !== null
                              ? "http://image.tmdb.org/t/p/w185/" +
                                movie.poster_path
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
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingWarMovies: state.movies.upcomingWarMovies,
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUpcomingWarMovies: () => dispatch(getUpcomingWarMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUpcomingWarMovies);
