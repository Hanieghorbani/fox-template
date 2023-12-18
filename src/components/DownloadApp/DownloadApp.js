import React from "react"
import { FaApple, FaGooglePlay } from "react-icons/fa"
export default function DownloadApp() {
  return (
    <div className="bg-img-primary bg-cover pt-20 ">
      <div className="container-primary flex sm:flex-col lg:flex-row items-center justify-between">
        <div
          className="space-y-10 lg:w-1/2 text-justify"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <h2 className="font-bold  sm:text-4xl md:text-5xl sm:text-center md:text-start text-minorTX">
            دریافت نسخه آزمایشی برنامه
          </h2>
          <p className="leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>

          <div className="flex sm:flex-col md:flex-row gap-4 sm:items-center lg:items-start">
            <button className="btn-secondary flex items-center sm:gap-1 md:gap-4 sm:w-[80%] md:w-auto">
              <FaGooglePlay className="text-3xl" />
              دریافت از 
              گوگل پلی
            </button>
            <button className="btn-secondary flex items-center sm:gap-1 md:gap-4 sm:w-[80%] md:w-auto">
              <FaApple className="text-3xl" />
              دریافت از
              اپ استور
            </button>
          </div>
        </div>
        <img
          src="/imgs/mobile-2.png"
          alt="mobile-2"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="100"

        />
      </div>
    </div>
  )
}
