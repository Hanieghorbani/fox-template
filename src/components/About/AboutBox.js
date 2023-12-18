import React from "react"
import { IoDiamondOutline } from "react-icons/io5"
import { GoRocket } from "react-icons/go"
import { PiMagicWandThin } from "react-icons/pi"
export default function AboutBox({ icon, duration }) {
  const icons = {
    IoDiamondOutline: <IoDiamondOutline />,
    GoRocket: <GoRocket />,
    PiMagicWandThin: <PiMagicWandThin />,
  }
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={duration}
    >
      <div className="text-primary sm:text-4xl lg:text-5xl mb-1">{icons[icon]}</div>
      <p className="sm:leading-6 lg:leading-8 md:text-sm md:leading-7">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از تولید سادگی نامفهوم از صنعت چاپ و با استفاده{" "}
      </p>
    </div>
  )
}
