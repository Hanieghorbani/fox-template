import React from "react"
import PriceBox from "./PriceBox"
export default function Price() {
  return (
    <div className="py-20">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"

        >
          <span className="text-primary">قیمت</span> برنامه
        </h1>
        <p className="text-xl text-center ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 mdLg:grid-cols-3 sm:gap-7 lg:gap-10 w-full">
          <PriceBox
            title="شرکتی"
            price={30999}
            duration="1000"
            aos="fade-left"
          />
          <PriceBox title="شخصی" price={80500} duration="1400" aos="fade-up" />
          <PriceBox
            title="کسب و کار"
            price={12000}
            duration="1800"
            aos="fade-right"
            suggested={true}
          />
        </div>
      </div>
    </div>
  )
}
