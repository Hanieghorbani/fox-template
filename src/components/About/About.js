import React from "react"
import AboutBox from "./AboutBox"
export default function About() {
  return (
    <div className="bg-img-primary bg-cover py-20">
      <div className="container-primary flex sm:flex-col md:flex-row items-center justify-between gap-10">
        <img
          src="/imgs/mobile-2.png"
          alt="mobile-2"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="w-[47%]"
        />
        <div className="md:space-y-5 lg:space-y-10 md:w-1/2 text-justify">
          <h2 className="font-bold text-4xl text-minorTX">کسب و کار را با ما آسان کنید</h2>
          <p className="leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون
          </p>
          <div className="grid md:grid-cols-2 sm:gap-7 md:gap-14 lg:gap-10">
            <AboutBox icon="GoRocket" duration="1000" />
            <AboutBox icon="IoDiamondOutline" duration="1200" />
            <AboutBox icon="PiMagicWandThin" duration="1400" />
            <AboutBox icon="GoRocket" duration="1600" />
          </div>
        </div>
      </div>
    </div>
  )
}
