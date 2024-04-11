import "./logIn.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import services from "../../Services/services";

const LogIn = () => {
  const [visible, setVisibile] = useState(false);
  const [logInError, setLogInError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

      try {
        setLoading(true);
        const { data, statusCode } = await services.postLogin(values);
        if (statusCode !== 200) {
          setLogInError(true);
          setLoading(false);
        } else {
          sessionStorage.setItem("loggedIn-user", JSON.stringify(data));
          const cartItem = JSON.parse(localStorage.getItem("purchaseItems"));
          setLoading(false);
          if (cartItem && cartItem.length > 0) {
            navigate("/purchase-confirm");
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    },
  });
  return (
    <div className="w-full font-montserrat flex h-svh items-center justify-center p-2 login">
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
            {logInError && (
              <p className="flex justify-between items-center text-red-500 border-l-4 border-red-500 p-2 bg-red-50 rounded-sm">
                Unauthorized. Please login with correct credentials.
                <CloseIcon
                  onClick={() => setLogInError(false)}
                  className="cursor-pointer"
                  fontSize="small"
                />
              </p>
            )}
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
