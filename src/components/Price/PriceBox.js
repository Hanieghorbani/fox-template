import React from "react"

export default function PriceBox({ title, price, duration, aos, suggested }) {
  return (
    <div
      className="rounded-3xl overflow-hidden w-full"
      data-aos={aos}
      data-aos-duration={duration}
      data-aos-anchor-placement="top-center"
      data-aos-delay="300"
    >
      <div className="flex flex-col items-center bg-img-primary bg-cover p-10 gap-10 text-primary font-bold relative overflow-hidden">
        <p className="text-2xl">{title}</p>
        <h3 className="sm:text-7xl mdLg:text-5xl lg:text-7xl font-[salamat]">
          {price.toLocaleString()} <span className="text-3xl">تومان</span>
        </h3>
        <p>سالانه</p>

        {suggested && (
          <div className="bg-primary text-white px-16 py-0.5 absolute top-7 -right-14 rotate-45">
            پیشنهادی
          </div>
        )}
      </div>
      <div className="bg-primary">
        <ul className=" text-white divide-y text-center">
          <li className="py-7">100 مگابایت فضای دیسک</li>
          <li className="py-7">100 مگابایت فضای دیسک</li>
          <li className="py-7">100 مگابایت فضای دیسک</li>
          <li className="py-7">100 مگابایت فضای دیسک</li>
          <li>
            <button className="btn-primary my-5">انتخاب پلن</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
