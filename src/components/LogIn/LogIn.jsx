import "./logIn.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import services from "../../Services/services";

const LogIn = () => {
  const [visible, setVisibile] = useState(false);

  const handleVisibility = () => {
    setVisibile(!visible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    onSubmit: async (values) => {
      console.log("user credentials=>", values);
      const response = await services.postLogin(values);

      if (!response) {
        return;
      }

      sessionStorage.setItem("loggedIn-user", JSON.stringify(response));
      console.log("login Response=>", response);

      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full flex h-svh items-center justify-center p-2 login">
      <div className="hidden w-[30em] lg:flex overflow-hidden">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em] max-h-[30em] bg-white rounded-sm">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl font-medium text-gray-700">LOGIN</h1>
          <hr className="border border-black/30" />
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
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
              {/* <label htmlFor="password">Password:</label> */}

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
            <button
              className="w-full rounded-sm bg-primary-medium p-2 text-white hover:bg-primary-light"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="relative flex flex-col-reverse md:flex-row justify-between gap-2">
            <div className="flex gap-2">
              <p className="">Don't have an account?</p>
              <a href="/sign-up" className="text-blue-700">
                Sign up
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
export default LogIn;
