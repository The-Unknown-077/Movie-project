import { memo } from 'react';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/thumbs";

import { useMovie } from '../../movies/service/useMovie';
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import playImg from "../images/Play.svg"
import { useNavigate } from 'react-router-dom';


interface Slide {
  id: number;
  title: string;
  release_date: number;
  original_language: string;
  vote_average: number;
  backdrop_path: string;
}


const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie()
  const { data } = getMovies({
    page: 12,
    without_genres: "10749,36,18,99,27"
  })
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1200px] mx-auto mb-[50px]">
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={setThumbsSwiper}
        slidesPerView={1}
        spaceBetween={8}
        watchSlidesProgress
        className="rounded-xl overflow-hidden"
      >
        {data?.results.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.backdrop_path}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-10 left-[50%] -translate-x-1/2 text-white">
                <h2 className="font-semibold text-[32px] leading-[125%] tracking-[0.01em] text-center text-white mb-[16px]">{slide.title}</h2>
                <p className="text-[#fff] text-[14px] font-semibold leading-[125%] tracking-[0.01em] text-center mb-[16px]">
                  {slide.release_date} • {slide.original_language} • {slide.vote_average}
                </p>
                <button onClick={() => navigate(`/movie/${slide.id}`)} className="mt-4 mx-auto flex justify-center items-center gap-[7px] text-center text-[#C61F1F] py-[14px] px-[127px] bg-white hover:bg-[#ccc] hover:cursor-pointer rounded-[12px] font-semibold text-[16px] leading-[125%] tracking-[0.01em]">
                  <img src={playImg} alt="" />
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        slidesPerView={7}
        spaceBetween={8}
        watchSlidesProgress
        className="mt-4"
      >
        {data?.results.map((slide: Slide) => (
          <div className="max-w-[500px]">
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-[55px] bg-cover bg-center rounded-md border border-transparent hover:border-red-500 cursor-pointer transition-all duration-300"
                style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.backdrop_path}")` }}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );

};

export default memo(Hero);