import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import ContactInfoBox from "./ContactInfoBox"
export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    title: "",
    contentText: "",
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("نام الزامی است")
      .min(7, "نام باید حداقل ۳ حرف داشته باشد"),
    email: Yup.string()
      .email("فرمت ایمیل وارد شده نا معتبراست")
      .required("ایمیل الزامی است"),
    title: Yup.string().required("موضوع پیام الزامی است"),
    contentText: Yup.string()
      .required("متن پیام الزامی است")
      .min(20, "پیام وارد شده نمی تواند کمتر از 20 حرف باشد"),
  })

  return (
    <div className="py-20" id="contact">
      <div className="container-primary flex flex-col items-center justify-center gap-10">
        <h1
          className="text-minorTX sm:text-4xl md:text-7xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          در <span className="text-primary">ارتباط</span> باشید
        </h1>
        <p className="text-xl text-center ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. <br /> چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </p>

        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="700"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="grid sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-10 w-full">
              <div className="relative">
                <Field
                  className="form-contact"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="نام و نام خانوادگی"
                  style={{ boxShadow: "none" }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error form-error after:top-[2.7rem] md:w-1/2"
                />
              </div>
              <div className="relative">
                <Field
                  className="form-contact"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ایمیل"
                  style={{ boxShadow: "none" }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error form-error after:top-[2.7rem] md:w-1/2"
                />
              </div>
              <div className="relative">
                <Field
                  className="form-contact"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="موضوع پیام"
                  style={{ boxShadow: "none" }}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error form-error after:top-[2.7rem] md:w-1/2"
                />
              </div>
              <div className=" md:col-span-3 relative">
                <Field
                  as="textarea"
                  type="text"
                  id="contentText"
                  name="contentText"
                  placeholder="متن پیام"
                  className="form-contact"
                  style={{ boxShadow: "none" }}
                />
                <ErrorMessage
                  name="contentText"
                  component="div"
                  className="error form-error after:top-[4.7rem] md:w-1/4"
                />
              </div>
              <button
                type="submit"
                className="btn-secondary sm:w-1/2 md:w-3/4"
              >
                ارسال پیام
              </button>
            </Form>
          </Formik>
        </div>

        <div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 w-full mt-10"
          data-aos="flip-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <ContactInfoBox
            title="82 تهران، میدان کاج، برج بلور، طبقه 456، واحد"
            icon="CiLocationOn"
          />
          <ContactInfoBox title="+98 123 456 789" icon="CiPhone" />
          <ContactInfoBox title="info@yourcompany.com" icon="BsEnvelope" />
        </div>
      </div>
    </div>
  )
}
