import "./contactUs.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../shared/images/cloud251Logo.png";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
      .required("Full name is required*"),
      message: Yup.string()
        .min(12, "Message must contain at least 12 characters.")
        .required("This field is required"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email address"
        )
        .required("Email address is required*"),
    }),
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full place-content-center font-montserrat mb-8">
      <div className="contactUs w-full flex flex-col place-items-center place-content-end min-h-[19em] p-8 text-center gap-4">
        <h1 className="text-4xl text-primary-blue font-semibold">
          Contact <span className="relative text-button-color line">us</span>
        </h1>
        <span className="text-primary-blue text-lg max-w-[40em]">
          How can we help? Your feedback is invaluable to us. Please don't
          hesitate to reach out with any questions, comments, or concerns..
        </span>
      </div>
      <div className="mx-4 flex flex-col xl:flex-row gap-4 xl:gap-0 items-center justify-center">
        <div className="relative flex flex-col  xl:self-start items-center w-full gap-4 p-4 justify-center text-center xl:ml-[10em]">
          <div className="max-w-[8em]">
            <img className="w-full" src={logo} alt="" />
          </div>
          <p className="max-w-[30em] text-lg text-gray-800">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary-blue  via-secondary-blue to-primary-blue text-transparent bg-clip-text font-semibold text-xl">
              Cloud251!
            </span>{" "}
            We are located at Meskel flower, Addis Ababa, Ethiopia. Feel free to
            visit us during our business hours or contact us for any inquiries.
            We look forward to seeing you!
          </p>
        </div>
        <div className="w-full flex items-center justify-center xl:justify-start">
          <form
            onSubmit={formik.handleSubmit}
            className="flex w-full max-w-[30em] flex-col gap-4 text-white border p-6 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg shadow-lg"
          >
            <div>
              <h1 className="text-2xl font-semibold">Get in touch</h1>
            </div>
            <hr />
            <div className="relative w-full">
              <label htmlFor="fullName" className="">
                Full name:
              </label>
              <input
                className={`w-full bg-transparent p-2 border rounded- outline-none placeholder:text-gray-300 ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-500"
                    : formik.touched.fullName && !formik.errors.fullName
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="fullName"
                placeholder="Full name"
                type="text"
                {...formik.getFieldProps("fullName")}
              />

              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500  mt-1">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <label htmlFor="email" className="">
                Email address:
              </label>
              <input
                className={`w-full bg-transparent p-2 border rounded- outline-none placeholder:text-gray-300  ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : formik.touched.email && !formik.errors.email
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="email"
                placeholder="Email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500  mt-1">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-full">
              <label htmlFor="email" className="">
                What can we help you with?
              </label>
              <textarea
                className={`w-full bg-transparent p-2 border rounded- outline-none placeholder:text-gray-300  ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : formik.touched.message && !formik.errors.message
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="message"
                placeholder="Message"
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500  mt-1">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            <button
              className={`flex justify-center items-center gap-2 w-full rounded-md p-2 text-white shadow-lg ${
                loading
                  ? "bg-button-color/50 cursor-wait"
                  : "bg-button-color hover:bg-button-color"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting" : "Submut"}
              {loading && <div className="login-Loader"></div>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
