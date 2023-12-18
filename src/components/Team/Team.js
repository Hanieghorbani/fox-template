import React from "react"
import TeamBox from "./TeamBox"
export default function Team() {
  return (
    <div className="bg-img-primary bg-cover py-20" id="team">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="100"

        >
          <span className="text-primary">تیم</span> ما
        </h1>
        <p className="text-xl text-center ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <TeamBox
            name="تونی استارک"
            role="توسعه دهنده رابط کاربری"
            img="/imgs/Team/team-2.jpg"
          />
          <TeamBox
            name="پیتر پارکر"
            role="توسعه دهنده بک اند"
            img="/imgs/Team/testimonials-1.jpg"
          />
          <TeamBox
            name="هری نیلر"
            role="UI/UX دیزاینر"
            img="/imgs/Team/testimonials-5.jpg"
          />
          <TeamBox
            name="نیک مایکلسون"
            role="سئو کار"
            img="/imgs/Team/team-3.jpg"
          />
        </div>
      </div>
    </div>
  )
}
