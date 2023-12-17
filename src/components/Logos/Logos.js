import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Logos.css"
export default function Logos() {
  return (
    <div className="bg-primary bg-cover py-5">
      <div className="container-primary flex items-center justify-between gap-10">
        <Swiper
          className="py-0 h-10 mySwiper"
          slidesPerView={5}
          breakpoints={{
            350: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 5 },
          }}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <img src="/imgs/Logos/logo-1.png" alt="logo-1" className="imgLogos"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Logos/logo-2.png" alt="logo-2" className="imgLogos"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Logos/logo-3.png" alt="logo-3" className="imgLogos"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Logos/logo-4.png" alt="logo-4" className="imgLogos"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Logos/logo-6.png" alt="logo-4" className="imgLogos"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
