import React, { useState } from "react"
import { IoDiamondOutline } from "react-icons/io5"
import { GoRocket } from "react-icons/go"
import { PiMagicWandThin } from "react-icons/pi"
export default function Box({ title, icon,duration }) {
  const [isHovered, setIsHovered] = useState(false)
  const icons = {
    IoDiamondOutline: <IoDiamondOutline className="" />,
    GoRocket: <GoRocket className="" />,
    PiMagicWandThin: <PiMagicWandThin className="" />,
  }
  return (
    <div
      className="bg-primary flex flex-col p-10 flex justify-center   items-center rounded-md text-white gap-3  transition-all hover:shadow-border-b-secondary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-anchor-placement="top-center"
      data-aos-delay="500"

    >
      <div
        className={`text-5xl p-5 text-primary bg-white rounded-full ${
          isHovered && "text-secondary transition-all"
        }`}
      >
        {icons[icon]}
      </div>

      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان
      </p>
    </div>
  )
}
