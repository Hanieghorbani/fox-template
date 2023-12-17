import React from "react"
import FeatureBox from "./FeatureBox"
export default function Features() {
  return (
    <div className="container-primary flex flex-col justify-center items-center my-10 gap-10" id="features">
      <h1
        className="sm:text-4xl md:text-7xl font-bold text-minorTX"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <span className="text-primary">ویژگی های</span> اصلی
      </h1>
      <p className="text-xl text-center sm:leading-9">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون
        و
      </p>

      <div className="flex sm:flex-col lg:items-center lg:flex-row">
        <div className="">
          <FeatureBox space="lg:-translate-x-28" align="lg:flex-row-reverse" />
          <FeatureBox space="lg:-translate-x-16" align="lg:flex-row-reverse" />
          <FeatureBox space="lg:-translate-x-24" align="lg:flex-row-reverse" />
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            // height='760px'
            className="stroke-primary animate-spin-slow sm:w-[400px] smMd:w-[600px] lg:w-[700px]"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke-width="1"
              stroke-dasharray="5,5"
            />
          </svg>
          <img
            src="/imgs/mobile-3.png"
            alt="mobile-3"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 wow backInUp sm:w-1/2 lg:max-w-full"
          />
        </div>
        <div className="">
          <FeatureBox space="lg:translate-x-28" />
          <FeatureBox space="lg:translate-x-16" />
          <FeatureBox space="lg:translate-x-24" />
        </div>
      </div>
    </div>
  )
}
