import React from "react"
import FactsBox from "./FactsBox"
export default function FunFacts() {
  return (
    <div className="bg-primary py-20">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"

        >
          <span className="text-white">حقایق</span> جالب
        </h1>
        <p className="text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-10">
          <FactsBox title="ثبت نام ها" number="645" duration="1000" />
          <FactsBox title="دانلود ها" number="971" duration="1400" />
          <FactsBox title="اشتراک گذاری" number="402" duration="1800" />
          <FactsBox title="خط کد" number="3953" duration="2300" />
        </div>
      </div>
    </div>
  )
}
