import React, { useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import "./Faq.css"
import { FaPlus } from "react-icons/fa"
export default function Faq() {
  const [expandedPanel, setExpandedPanel] = useState("panel1")
  return (
    <div className="py-20">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <span className="text-primary">سوالات</span> متداول
        </h1>
        <p className="text-xl text-center ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 items-center">
          <div
            className="md:col-span-2"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <Accordion
              expanded={expandedPanel === "panel1"}
              onChange={() =>
                setExpandedPanel((prev) =>
                  prev === "panel1" ? null : "panel1"
                )
              }
            >
              <AccordionSummary
                className="bg-primary text-white"
                expandIcon={<FaPlus />}
                id="panel1a-header"
              >
                لورم ایپسوم
              </AccordionSummary>
              <AccordionDetails>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expandedPanel === "panel2"}
              onChange={(e) =>
                setExpandedPanel((prev) =>
                  prev === "panel2" ? null : "panel2"
                )
              }
            >
              <AccordionSummary expandIcon={<FaPlus />} id="panel2a-header">
                لورم ایپسوم لورم ایپسوم
              </AccordionSummary>
              <AccordionDetails>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expandedPanel === "panel3"}
              onChange={() =>
                setExpandedPanel((prev) =>
                  prev === "panel3" ? null : "panel3"
                )
              }
            >
              <AccordionSummary expandIcon={<FaPlus />} id="panel3a-header">
                لورم ایپسوم
              </AccordionSummary>
              <AccordionDetails>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه
              </AccordionDetails>
            </Accordion>
          </div>
          <img
            src="/imgs/mobile-1.png"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
