import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { EffectCoverflow } from "swiper";
import { connect } from "react-redux";
import { getTrendingMovies } from "../redux";

import sampleImg from "../../src/assets/sample.jpg";
import sampleImg2 from "../../src/assets/sampleImg2.png";
import sampleImg3 from "../../src/assets/sampleImg3.jpg";
import sampleImg4 from "../../src/assets/sampleImg4.png";
import sampleImg5 from "../../src/assets/sampleImg5.jpg";
import sampleImg6 from "../../src/assets/founder.jpg";

swiperCore.use([EffectCoverflow]);

const demoMovies = [
  { id: 0, poster: sampleImg },
  { id: 1, poster: sampleImg2 },
  { id: 2, poster: sampleImg3 },
  { id: 3, poster: sampleImg4 },
  { id: 4, poster: sampleImg5 },
  { id: 5, poster: sampleImg6 },
];

const FetchTrendingMovie = ({ showTrendingMovies, trending }) => {
  console.log(trending);
  useEffect(() => {
    showTrendingMovies();
  }, [showTrendingMovies]);
  return (
    <section className="trendingCard">
      <h2 className="trendingCard__heading">Trending Now</h2>
      <Swiper
        // spaceBetween={50}
        centeredSlides={true}
        effect="coverflow"
        height={250}
        width={170}
      >
        {trending.map((trend) => (
          <SwiperSlide key={trend.id}>
            <div className="trendingCard__poster__wrapper">
              <img
                src={`http://image.tmdb.org/t/p/w185/${trend.poster_path}`}
                alt="post"
                className="trendingCard__poster"
                sizes="185px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    trending: state.movies.moviesData.trending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTrendingMovies: () => dispatch(getTrendingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTrendingMovie);
