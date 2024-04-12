import "./contactUs.scss";
import { useState } from "react";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const ContactUs = () => {
  const [visible, setVisibile] = useState(false);
  const [logInError, setLogInError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVisibility = () => {
    setVisibile(!visible);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("This field is required"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email address"
        )
        .required("Email address is required*"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required*"),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <div className="flex flex-col w-full place-content-center font-montserrat">
      <div className="contactUs w-full flex flex-col place-items-center place-content-end min-h-[19em] p-8 text-center gap-4">
        <h1 className="text-4xl text-primary-blue font-semibold">
          Contact <span className="relative text-button-color line">us</span>
        </h1>
        <span className="text-primary-blue text-lg max-w-[40em]">
          How can we help? Your feedback is invaluable to us. Please don't
          hesitate to reach out with any questions, comments, or concerns..
        </span>
      </div>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 text-black"
        >
          <div className="w-full">
            <label htmlFor="email" className="text-gray-900">
              Email address:
            </label>
            <input
              className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
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
              <div className="text-red-600 text-xs mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="relative w-full">
            <label htmlFor="password" className="text-gray-900">
              Password:
            </label>
            <input
              className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : formik.touched.password && !formik.errors.password
                  ? "border-green-500"
                  : "border-gray-400"
              }`}
              id="password"
              placeholder="Password"
              type={visible ? "text" : "password"}
              {...formik.getFieldProps("password")}
            />
            {visible ? (
              <VisibilityIcon
                onClick={handleVisibility}
                className="absolute top-11 right-3 transform -translate-y-1/2 text-gray-500"
              />
            ) : (
              <VisibilityOffIcon
                onClick={handleVisibility}
                className="absolute top-11 right-3 transform -translate-y-1/2 text-gray-500"
              />
            )}

            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-xs mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-gray-900">
              What can we help you with?
            </label>
            <input
              className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : formik.touched.message && !formik.errors.message
                  ? "border-green-500"
                  : "border-gray-400"
              }`}
              id="message"
              placeholder="Message"
              type="text"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600 text-xs mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
          <button
            className={`flex justify-center items-center gap-2 w-full rounded-sm  p-2 text-white  ${
              loading
                ? "bg-button-color/50 cursor-wait"
                : "bg-button-color hover:bg-button-color"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in" : "Log in"}
            {loading && <div className="login-Loader"></div>}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
