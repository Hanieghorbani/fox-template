import React from 'react'
import { CiUser } from "react-icons/ci"
import { LuAlarmClock } from "react-icons/lu"
export default function RecentNewsBox() {
  return (
    <div className="flex sm:flex-col md:flex-row gap-10 sm:items-start md:items-center md:p-10">
          <img src="/imgs/news-1.jpg" className='imgRecentNews'/>
          <div className="space-y-5 text-start">
            <h1 className="font-bold text-2xl text-minorTX">
              لورم ایپسوم متن ساختگی
            </h1>
            <p className="sm:leading-[3rem] md:leading-8 text-lg text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط
            </p>

            <div className="flex font-[salamat] gap-4 text-xl">
              <span className="flex text-gray-500">
                <CiUser className="text-primary ml-1" />
                توسط مدیر
              </span>
              <span className="flex text-gray-500">
                <LuAlarmClock className="text-primary ml-1" />3 خرداد 1402
              </span>
            </div>

            <button className="btn-secondary md:text-sm">بیشتر بخوانید</button>
          </div>
        </div>
  )
}
