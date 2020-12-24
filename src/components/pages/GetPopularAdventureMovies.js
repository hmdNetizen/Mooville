import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { connect } from "react-redux";
import { getPopularAdventureMovies } from "../../redux";
import Spinner from "../Spinner";

swiperCore.use([EffectCoverflow, Scrollbar]);

const GetPopularAdventureMovies = (props) => {
  const {
    popularAdventureMovies,
    darkMode,
    loading,
    error,
    showPopularAdventureMovies,
  } = props;
  useEffect(() => {
    showPopularAdventureMovies();
  }, [showPopularAdventureMovies]);
  return (
    <section
      className={`main ${darkMode ? "main__darkMode" : "main__lightMode"}`}
    >
      <div className="adventure">
        <h1
          className={`adventure__title ${
            darkMode
              ? "adventure__title--darkMode"
              : "adventure__title--lightMode"
          }`}
        >
          Discover Movies (Adventure)
        </h1>
        <div className="trending">
          <h2
            className={`trending__heading ${
              darkMode
                ? "trending__heading--darkMode"
                : "trending__heading--lightMode"
            }`}
          >
            Most Popular (2020)
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
                {popularAdventureMovies.map((adventure) => (
                  <SwiperSlide
                    key={adventure.id}
                    stle={{ borderRadius: "20px !important" }}
                  >
                    <div
                      className={`trending__poster__wrapper ${
                        darkMode
                          ? "trending__poster__wrapper--darkMode"
                          : undefined
                      }`}
                    >
                      <Link to={`/movie/${adventure.id}`}>
                        <img
                          src={`http://image.tmdb.org/t/p/w185/${adventure.poster_path}`}
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
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    popularAdventureMovies: state.movies.popularAdventureMovies,
    darkMode: state.theme.darkTheme,
    loading: state.movies.loading,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopularAdventureMovies: () => dispatch(getPopularAdventureMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPopularAdventureMovies);
