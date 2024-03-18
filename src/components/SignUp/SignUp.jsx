import "./signUp.scss";
import { useState } from "react";
import { Form, Formik, useFormik } from "formik";
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
      companyName: "",
      PhoneNumber: "",
      email: "",
      userName: "",
      country: "",
      province: "",
      city: "",
      industry: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      accountType: Yup.string().required("Please choose account type*"),
      fullName: Yup.string().required("Full name is required*"),
      companyName: Yup.string().when("accountType", {
        is: "business",
        then: () => Yup.string().required("Company name is required*"),
        otherwise: () => Yup.string().notRequired(),
      }),
      PhoneNumber: Yup.string().required("Phone number is required*"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required*"),
      userName: Yup.string().required("User name name is required*"),
      country: Yup.string().required("Country name is required*"),
      province: Yup.string().required("Province name is required*"),
      city: Yup.string().required("City name is required*"),
      industry: Yup.string().when("accountType", {
        is: "business",
        then: () => Yup.string().required("Industry type name is required*"),
        otherwise: () => Yup.string().notRequired(),
      }),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required*"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // try {
      //   const res = await fetch("http://localhost:5000/users", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(values),
      //   });

      //   if (!res.ok) {
      //     throw new Error("Failed to submit form");
      //   }

      //   resetForm();
      //   console.log("Form submitted successful");
      // } catch (error) {
      //   console.error("Error:", error);
      // }
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="w-full flex h-full items-center justify-center p-2 signup">
      <div className="hidden w-[30em] lg:flex overflow-hidden">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="mt-[7.5em]  flex-grow max-w-[30em] bg-white rounded-sm">
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
            {formik.values.accountType === "business" && (
              <div className="w-full">
                {/* <label htmlFor="email">Email:</label> */}
                <input
                  className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                  id="companyName"
                  placeholder="Company name"
                  type="text"
                  {...formik.getFieldProps("companyName")}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="text-red-600 text-xs mt-1">
                    {formik.errors.companyName}
                  </div>
                ) : null}
              </div>
            )}
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
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="userName"
                placeholder="User name"
                type="text"
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.userName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="country"
                placeholder="Country"
                type="text"
                {...formik.getFieldProps("country")}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.country}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="province"
                placeholder="Province"
                type="text"
                {...formik.getFieldProps("province")}
              />
              {formik.touched.province && formik.errors.province ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.province}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                id="city"
                placeholder="City"
                type="text"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.city}
                </div>
              ) : null}
            </div>
            {formik.values.accountType === "business" && (
              <div className="w-full">
                {/* <label htmlFor="email">Email:</label> */}
                <input
                  className="w-full bg-transparent p-2 border border-gray-400 rounded-sm"
                  id="industry"
                  placeholder="Industry type"
                  type="text"
                  {...formik.getFieldProps("industry")}
                />
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="text-red-600 text-xs mt-1">
                    {formik.errors.industry}
                  </div>
                ) : null}
              </div>
            )}
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
              Sign up
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
