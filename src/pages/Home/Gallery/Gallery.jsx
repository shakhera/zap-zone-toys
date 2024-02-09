import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import galerry1 from "../../../assets/category/10.avif";
import galerry2 from "../../../assets/category/11.avif";
import galerry3 from "../../../assets/category/12.avif";
import galerry4 from "../../../assets/category/13.avif";
import galerry5 from "../../../assets/category/14.avif";
import galerry6 from "../../../assets/category/15.avif";
import galerry7 from "../../../assets/category/16.avif";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="mx-12">
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-8 "
        >
          <SwiperSlide>
            <img src={galerry1} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry2} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry3} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry4} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry5} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry6} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry7} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry1} alt="" className="h-80 w-72" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={galerry2} alt="" className="h-80 w-72" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center">
        <Link to="/alltoys" className="btn btn-link ">
          See all toys
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
