import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "./RecentNews.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

import RecentNewsBox from "./RecentNewsBox"
export default function RecentNews() {
  return (
    <div className="py-20" id="news">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX  sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"

        >
          <span className="text-primary">اخبار </span> جدید
        </h1>
        <p className="text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="swiperNews mb-10"
          loop={true}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"

        >
          <SwiperSlide>
            <RecentNewsBox />
          </SwiperSlide>
          <SwiperSlide>
            <RecentNewsBox />
          </SwiperSlide>
          <SwiperSlide>
            <RecentNewsBox />
          </SwiperSlide>
          <SwiperSlide>
            <RecentNewsBox />
          </SwiperSlide>
          <SwiperSlide>
            <RecentNewsBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
