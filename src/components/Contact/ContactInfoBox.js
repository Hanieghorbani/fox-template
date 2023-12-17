import React from "react"
import { CiLocationOn,CiPhone } from "react-icons/ci"
import { BsEnvelope } from "react-icons/bs"
export default function ContactInfoBox({ icon, title }) {
  const icons = {
    BsEnvelope: <BsEnvelope />,
    CiPhone: <CiPhone />,
    CiLocationOn: <CiLocationOn />,
  }
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="text-primary text-7xl">{icons[icon]}</div>
      <p className=" text-minorTX font-bold text-2xl font-[salamat] text-center" dir="ltr">{title}</p>
    </div>
  )
}
