import "./signUp.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import services from "../../Services/services";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const SignUp = () => {
  const [visible, setVisibile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleVisibility = () => {
    setVisibile(!visible);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const checkProduct = () => {
    return localStorage.getItem("");
  };

  const isProductSelected = (key) => {
    try {
      const value = localStorage.getItem(key);
      return value !== null;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return false;
    }
  };
  const formik = useFormik({
    initialValues: {
      accountType: "",
      TINNumber: "",
      specificAddress: "",
      firstName: "",
      middleName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
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
      // TINNumber: Yup.number("TIN number must be in numbers").required(
      //   "TIN number is required"
      // ),
      TINNumber: Yup.string().when("accountType", {
        is: "business",
        then: () => Yup.string().required("TIN is required*"),
        otherwise: () => Yup.string().notRequired(),
      }),
      // TINNumber: Yup.string().test(
      //   "tin-required",
      //   "TIN is required for business accounts",
      //   function (value) {
      //     const accountType = this.parent.accountType;

      //     if (accountType === "business") {
      //       return value !== undefined && value !== null && value.length > 0;
      //     }
      //     return true;
      //   }
      // ),
      specificAddress: Yup.string().required(
        "Specific address is required. Example - Piassa, Summit"
      ),
      firstName: Yup.string().required("First name is required*"),
      middleName: Yup.string().required("Middle name is required*"),
      lastName: Yup.string().required("Last name is required*"),
      companyName: Yup.string().when("accountType", {
        is: "business",
        then: () => Yup.string().required("Company name is required*"),
        otherwise: () => Yup.string().notRequired(),
      }),
      // companyName: Yup.string().test(
      //   "company-name-required",
      //   "Company name is required for business accounts",
      //   function (value) {
      //     const accountType = this.parent.accountType;

      //     if (accountType === "business") {
      //       return value !== undefined && value !== null && value.length > 0;
      //     }
      //     return true; // Return true for other account types
      //   }
      // ),
      phoneNumber: Yup.string().required("Phone number is required*"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email address"
        )
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
        .matches(
          /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
          "Oops! It seems like there's a hiccup with your password. Remember, it should be at least 8 characters long and include a mix of letters, numbers, and special characters. Double-check and try again!"
        )
        .required("Password is required*"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      values.phoneNumber = `251${values.phoneNumber}`;

      const userDetail = {
        userDetail: {
          ...values,
        },

        isProductSelected: isProductSelected("purchaseItems"),
      };
      // alert(JSON.stringify(userDetail, null, 2));
      const response = await services.postSignUp(userDetail);
      if (!response) {
        return;
      }
      alert("Sign up Successful!!");
      resetForm();
    },
  });

  return (
    <div className="w-full font-Inter flex items-center justify-center p-2 signup">
      <div className="mt-[8em] mb-[3em] flex-grow max-w-[40em] bg-white rounded-md shadow-2xl">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-DMSans font-bold text-primary-blue">
            SIGN UP
          </h1>
          <hr className="border border-black/30" />
          <div className="flex items-center gap-4">
            <div>
              <input
                className="mr-2 accent-button-color"
                type="radio"
                id="personal"
                name="accountType"
                value="personal"
                checked={formik.values.accountType === "personal"}
                onChange={formik.handleChange}
              />
              <label htmlFor="personal" className="text-gray-600">
                Personal
              </label>
            </div>
            <div>
              <input
                className="mr-2 accent-button-color"
                type="radio"
                id="business"
                name="accountType"
                value="business"
                checked={formik.values.accountType === "business"}
                onChange={formik.handleChange}
              />
              <label htmlFor="business" className="text-gray-600">
                Business
              </label>
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
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : formik.touched.firstName && !formik.errors.firstName
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="firstName"
                placeholder="First name"
                type="text"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.middleName && formik.errors.middleName
                    ? "border-red-500"
                    : formik.touched.middleName && !formik.errors.middleName
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="middleName"
                placeholder="Middle name"
                type="text"
                {...formik.getFieldProps("middleName")}
              />
              {formik.touched.middleName && formik.errors.middleName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.middleName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : formik.touched.lastName && !formik.errors.lastName
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="lastName"
                placeholder="Last name"
                type="text"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            {formik.values.accountType === "business" ? (
              <div className="w-full">
                <input
                  className={`w-full bg-transparent p-2 border border-gray-400 rounded-sm outline-none ${
                    formik.touched.companyName && formik.errors.companyName
                      ? "border-red-500"
                      : "border-gray-400 "
                  }`}
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
            ) : null}
            {formik.values.accountType === "business" ? (
              <div className="w-full">
                <input
                  className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                    formik.touched.TINNumber && formik.errors.TINNumber
                      ? "border-red-500"
                      : formik.touched.TINNumber && !formik.errors.TINNumber
                      ? "border-green-500"
                      : "border-gray-400"
                  }`}
                  id="TINNumber"
                  placeholder="Tin number"
                  type="text"
                  {...formik.getFieldProps("TINNumber")}
                />
                {formik.values.TINNumber}
                {formik.touched.TINNumber && formik.errors.TINNumber ? (
                  <div className="text-red-600 text-xs mt-1">
                    {formik.errors.TINNumber}
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="w-full ">
              <div className="flex items-center">
                <span className="border border-gray-400 rounded-s-sm p-2 bg-gray-300 text-gray-500">
                  +251
                </span>
                <input
                  className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-red-500"
                      : formik.touched.phoneNumber && !formik.errors.phoneNumber
                      ? "border-green-500"
                      : "border-gray-400"
                  }`}
                  id="phoneNumber"
                  placeholder="Phone number"
                  type="number"
                  {...formik.getFieldProps("phoneNumber")}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div className="w-full">
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
            <div className="w-full">
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.country && formik.errors.country
                    ? "border-red-500"
                    : formik.touched.country && !formik.errors.country
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
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
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.province && formik.errors.province
                    ? "border-red-500"
                    : formik.touched.province && !formik.errors.province
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
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
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-500"
                    : formik.touched.city && !formik.errors.city
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
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
            <div className="w-full">
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.specificAddress &&
                  formik.errors.specificAddress
                    ? "border-red-500"
                    : formik.touched.specificAddress &&
                      !formik.errors.specificAddress
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="specificAddress"
                placeholder="Specific address"
                type="text"
                {...formik.getFieldProps("specificAddress")}
              />
              {formik.touched.specificAddress &&
              formik.errors.specificAddress ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.specificAddress}
                </div>
              ) : null}
            </div>
            {formik.values.accountType === "business" ? (
              <div className="w-full">
                <input
                  className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                    formik.touched.industry && formik.errors.industry
                      ? "border-red-500"
                      : formik.touched.industry && !formik.errors.industry
                      ? "border-green-500"
                      : "border-gray-400"
                  }`}
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
            ) : null}
            <div className="w-full">
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.userName && formik.errors.userName
                    ? "border-red-500"
                    : formik.touched.userName && !formik.errors.userName
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
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
            <div className="relative w-full">
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
              <input
                className={`w-full bg-transparent p-2 border rounded-sm outline-none ${
                  formik.touched.ConfirmPassword &&
                  formik.errors.ConfirmPassword
                    ? "border-red-500"
                    : formik.touched.ConfirmPassword &&
                      !formik.errors.ConfirmPassword
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                id="ConfirmPassword"
                placeholder="ConfirmPassword"
                type={visible ? "text" : "password"}
                {...formik.getFieldProps("ConfirmPassword")}
              />
              {formik.touched.ConfirmPassword &&
              formik.errors.ConfirmPassword ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.ConfirmPassword}
                </div>
              ) : null}
            </div>
            <div className="flex items-center w-full">
              <Checkbox
                size="small"
                checked={isChecked}
                onChange={handleCheckboxChange}
                {...label}
                sx={{
                  color: "#BC68B2",
                  "&.Mui-checked": {
                    color: "#BC68B2",
                  },
                  marginLeft: "-0.6em",
                }}
                name="enterprise"
              />
              <Link
                to="/terms-conditions"
                className="text-blue-600 underline text-sm"
              >
                By signing up, you agree to our terms and conditions.{" "}
              </Link>
            </div>

            <button
              className={`w-full rounded-sm p-2 text-white ${
                isChecked
                  ? "bg-button-color"
                  : "cursor-not-allowed bg-button-color/50"
              }`}
              disabled={!isChecked}
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
            <div className="flex gap-2">
              <p className="text-light-black">Already have an account?</p>
              <Link to="/log-in" className="text-blue-700">
                Log in
              </Link>
            </div>
            <Link to="/forgot-password" className="text-gray-500">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
