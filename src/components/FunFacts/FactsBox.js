import React, { useState, useEffect } from "react"
import { BsGift } from "react-icons/bs"
export default function FactsBox({ title, number ,duration}) {
  const [factsCount, setFactsCount] = useState(0)
  let interval
  useEffect(() => {
    interval = setInterval(() => {
      setFactsCount((prevCount) => prevCount + 1)
    }, 1)
    if (factsCount == number) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [factsCount])

  return (
    <div
      className="rounded-3xl py-6 w-full bg-white flex flex-col items-center gap-8"
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"

    >
      <BsGift className="text-4xl text-primary" />
      <h3 className="text-primary font-bold text-5xl font-[salamat]">
        {factsCount}
      </h3>
      <h3 className="text-primary font-bold text-2xl">{title}</h3>
    </div>
  )
}
