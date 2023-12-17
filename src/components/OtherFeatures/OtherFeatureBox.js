import React from "react"
import { BsGift } from "react-icons/bs"
export default function OtherFeatureBox({ title }) {
  return (
    <div className="rounded-3xl p-8 bg-white flex flex-col items-center gap-5">
      <BsGift className="text-4xl text-primary"/>
      <h3 className="text-primary font-bold sm:text-xl lg:text-2xl">{title}</h3>
      <p className="text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و
      </p>
    </div>
  )
}
