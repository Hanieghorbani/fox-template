import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import FooterBox from "./FooterBox"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import "./Footer.css"
export default function Footer() {
  const initialValues = {
    email: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(" ایمیل وارد شده نا معتبراست")
      .required("ایمیل الزامی است"),
  })
  return (
    <div className="footer bg-img-dark bg-cover pt-28">
      <div className="container-primary">
        <Formik initialValues={initialValues}>
          <Form className="flex sm:flex-col md:flex-row justify-between sm:gap-5 md:gap-10 items-center bg-white rounded-[2.5rem] p-6">
            <div className="relative w-full">
              <Field
                className="rounded-[2.5rem] bg-gray-200 border-none w-full"
                type="text"
                id="email"
                name="email"
                placeholder="ایمیل خود را وارد کنید"
                style={{ boxShadow: "none" }}
                required
                title="وارد کردن ایمیل الزامی است"
              />
            </div>
            <button type="submit" className="btn-secondary">
              اشتراک
            </button>
          </Form>
        </Formik>

        {/* main footer */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 md:gap-16 text-white mt-16 my-10">
          <div>
            <img src="/imgs/fox-logo.png" className="mb-5" />
            <p className="leading-8 mr-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و
            </p>
          </div>
          <FooterBox title="دسترسی سریع">
            <li>خانه</li>
            <li>درباره ما</li>
            <li>خدمات</li>
            <li>محصولات</li>
          </FooterBox>
          <FooterBox title="تماس سریع">
            <li>
              تلفن:{" "}
              <span dir="ltr" className="font-[salamat] text-2xl">
                +98 123 456 789
              </span>
            </li>
            <li className="">ایمیل: info@yourcompany.com</li>
            <li className="font-[salamat] text-2xl">
              آدرس: تهران، میدان کاج، برج بلور، طبقه 456، واحد 85
            </li>
          </FooterBox>
          <FooterBox title="شبکه اجتماعی">
            <div className="grid grid-cols-4 gap-5">
              <FaGithub className="text-3xl cursor-pointer" />
              <FaTwitter className="text-3xl cursor-pointer" />
              <FaLinkedin className="text-3xl cursor-pointer" />
              <RiInstagramFill className="text-3xl cursor-pointer" />
            </div>
          </FooterBox>
        </div>
      </div>

      {/* container section */}
      <div className="bg-black/50 flex sm:flex-col md:flex-row sm:gap-5 text-primary items-center justify-between container-primary p-10">
        <div className="text-white sm:text-sm md:text-base">
          ارائه شده توسط حانیه قربانی{" "}
          <a
            href="https://www.rtl-theme.com/"
            className="text-primary  hover:text-secondary transition-all duration-300"
          >
            (قالب از راستچین)
          </a>
        </div>
        <div className="flex sm:flex-col lg:flex-row">
          <p>
            <a
              href="#"
              className="ml-5 hover:text-secondary transition-all duration-300"
            >
              قوانین و مقررات
            </a>
          </p>
          <p>
            <a
              href="#"
              className=" hover:text-secondary transition-all duration-300"
            >
              سیاست حریم خصوصی
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
