import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./OtherFeature.css"
import OtherFeatureBox from "./OtherFeatureBox"
import { Autoplay, Pagination } from "swiper/modules"

export default function OtherFeatures() {
  return (
    <div className="bg-primary py-20">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl text-7xl font-bold text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          سایر <span className="text-white"> ویژگی های</span> عالی
        </h1>
        <p className="text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>
        <Swiper
          breakpoints={{
            350: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          className="mySwiper otherFeatures"
          loop={true}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <SwiperSlide>
            <OtherFeatureBox title="نصب سریع" />
          </SwiperSlide>
          <SwiperSlide>
            <OtherFeatureBox title="کدهای مرتب" />
          </SwiperSlide>
          <SwiperSlide>
            <OtherFeatureBox title="پشتیبانی سریع" />
          </SwiperSlide>
          <SwiperSlide>
            <OtherFeatureBox title="محافظت داده" />
          </SwiperSlide>
          <SwiperSlide>
            <OtherFeatureBox title="نصب سریع" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
