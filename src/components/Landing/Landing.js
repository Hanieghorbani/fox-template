import React from "react"
import "./Landing.css"
export default function Landing() {
  return (
    <div className="header-bottom bg-primary container-primary flex sm: flex-col md:flex-row justify-between items-center pt-10 overflow-hidden relative">
      <div className=" md:w-1/2 space-y-5 sm:text-justify md:text-right">
        <p className="md:text-xl">شما با ما میتوانید</p>
        <h1 className="sm:text-6xl md:text-6xl lg:text-8xl font-bold">موفق شوید</h1>
        <p className="md:text-xl break-words md:w-3/4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        </p>
        <button className="btn-primary mb-10">بیشتر بخوانید</button>
      </div>

      <img src="/imgs/mobile-1.png" alt="mobile-1" className="z-10 md:w-1/2"/>
    </div>
  )
}
