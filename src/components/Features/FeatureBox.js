import React from "react"
import { IoDiamondOutline } from "react-icons/io5"
export default function FeatureBox({ space, align }) {
  return (
    <div className={`sm:container-primary md:px-0 space-y-3 sm:my-10 lg:mb-24 lg:mt-20 ${space}`}>
      <div className={`flex ${align}`}>
        <IoDiamondOutline className="text-primary text-3xl" />
        <h1 className="font-bold text-xl text-minorTX">لورم ایپسوم</h1>
      </div>
      <p className="tracking-wider">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
      </p>
    </div>
  )
}
