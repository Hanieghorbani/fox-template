import React from "react"
import { CiPlay1 } from "react-icons/ci"
import { FaPlay } from "react-icons/fa6"
import "./WatchVideo.css"
export default function WatchVideo() {
  return (
    <div className="container-primary flex flex-col items-center gap-10 py-36">
      <h1
        className="text-minorTX sm:text-4xl md:text-7xl font-bold"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        مشاهده <span className="text-primary">ویدئو</span>
      </h1>
      <p className="text-xl text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون
        و
      </p>

      <div
        className="video bg-img-people bg-cover relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"

      >
        <img src="/imgs/mobile-4-4.png" alt="" className="z-10 relative" />
        <div className="border-2 border-white rounded-full p-5 center-position z-20 animate-shadow flex justify-center items-center">
          <FaPlay className="text-white w-10 h-10 cursor-pointer " />
        </div>
      </div>
    </div>
  )
}
