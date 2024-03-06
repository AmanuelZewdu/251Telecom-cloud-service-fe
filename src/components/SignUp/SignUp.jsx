import "./signUp.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SignUp = () => {
  const [visible, setVisibile] = useState(false);

  const handleVisibility = () => {
    setVisibile(!visible);
  };

  const formik = useFormik({
    initialValues: {
      accountType: "",
      fullName: "",
      PhoneNumber: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      accountType: Yup.string().required("Please choose account type*"),
      fullName: Yup.string().required("Full name is required*"),
      PhoneNumber: Yup.string().required("Phone number is required*"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required*"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required*"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required*"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="w-full flex h-svh items-center justify-center p-2 signup">
      <div className="hidden w-[30em] lg:flex overflow-hidden">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em]  bg-white rounded-sm">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl font-medium text-gray-700">SIGN UP</h1>
          <hr className="border border-black/30" />
          <div className="flex items-center gap-4">
            <div>
              <input
                className="mr-2"
                type="radio"
                id="personal"
                name="accountType"
                value="personal"
                checked={formik.values.accountType === "personal"}
                onChange={formik.handleChange}
              />
              <label htmlFor="personal">Personal</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="business"
                name="accountType"
                value="business"
                checked={formik.values.accountType === "business"}
                onChange={formik.handleChange}
              />
              <label htmlFor="business">Business</label>
            </div>
            {formik.touched.accountType && formik.errors.accountType ? (
              <div className="text-red-600 text-xs mt-1">
                {formik.errors.accountType}
              </div>
            ) : null}
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="fullName"
                placeholder="Full name"
                type="text"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="PhoneNumber"
                placeholder="Phone number"
                type="number"
                {...formik.getFieldProps("PhoneNumber")}
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.PhoneNumber}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
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
              {/* <label htmlFor="password">Password:</label> */}

              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="password"
                placeholder="Password"
                type={visible ? "text" : "password"}
                {...formik.getFieldProps("password")}
              />
              {visible ? (
                <VisibilityIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              )}

              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="relative w-full">
              {/* <label htmlFor="password">Password:</label> */}

              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="ConfirmPassword"
                placeholder="ConfirmPassword"
                type={visible ? "text" : "password"}
                {...formik.getFieldProps("ConfirmPassword")}
              />
              {visible ? (
                <VisibilityIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={handleVisibility}
                  className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500"
                />
              )}

              {formik.touched.ConfirmPassword &&
              formik.errors.ConfirmPassword ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.ConfirmPassword}
                </div>
              ) : null}
            </div>
            <button
              className="w-full rounded-sm bg-primary-medium p-2 text-white hover:bg-primary-light"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
            <div className="flex gap-2">
              <p className="">Already have an account?</p>
              <a href="/log-in" className="text-blue-700">
                Log in
              </a>
            </div>
            <a href="/forgot-password" className="text-gray-500">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
