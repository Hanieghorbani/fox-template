import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import "./Screenshots.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export default function Screenshots() {
  return (
    <div className="bg-img-primary bg-cover py-36" id="screenShots">
      <div className="container-primary flex flex-col items-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <span className="text-primary">تصاویر </span>عالی
        </h1>
        <p className="text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div className="w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/imgs/gallery/portfolio-7.jpg" className="imgScreenShots"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/gallery/portfolio-2.jpg" className="imgScreenShots"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/gallery/portfolio-3.jpg" className="imgScreenShots"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/gallery/portfolio-4.jpg" className="imgScreenShots"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
