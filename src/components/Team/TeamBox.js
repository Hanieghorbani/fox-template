import React, { useState } from "react"
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"
export default function TeamBox({ name, role, img }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className=" bg-white transition-all relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sm:p-10 lg:p-5 flex flex-col gap-8 items-center">
        <img src={img} alt="team-2" className="rounded-full" />
        <p
          className={`text-primary font-bold sm:text-2xl md:text-lg ${
            isHovered && "text-secondary duration-500"
          }`}
        >
          {name}
        </p>
        <p className="sm:text-2xl md:text-xl lg:text-base font-bold text-minorTX">{role}</p>
        <p className="sm:text-xl lg:text-base text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک
        </p>
      </div>

      <div
        className={`flex absolute justify-between px-10 py-3 bg-white text-secondary w-full ${
          isHovered ? "z-1 duration-300 -bottom-10 sm:mb-10 lg:mb-auto" : "z-[-2] bottom-0"
        }`}
      >
        <FaTwitter className="cursor-pointer" />
        <FaFacebookF className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
      </div>
    </div>
  )
}
