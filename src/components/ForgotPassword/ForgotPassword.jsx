import "./forgotPassword.scss";
import { useState } from "react";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import services from "../../Services/services";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ForgotPassword = () => {
  const [forgotPasswordError, setForgotPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const MySnackbar = styled(Snackbar)({
    "& .MuiSnackbarContent-root": {
      backgroundColor: "#17629d",
      marginTop: "5em",
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email address"
        )
        .required("Email address is required*"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        setLoading(true);
        const { statusCode } = await services.getInstanceType(values);
        if (statusCode === 200) {
          setLoading(false);
          handleClick({ vertical: "top", horizontal: "center" })();
        }
      } catch (error) {
        console.error("Error occured", error);
      }
    },
  });
  return (
    <div className="w-full font-montserrat flex h-screen items-center justify-center p-4 forgotPassword">
      <div className="hidden w-[30em] lg:flex overflow-hidden">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.webp")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em] max-h-[30em] bg-white rounded-sm shadow-2xl">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl font-medium text-gray-700">
            Confirm email address
          </h1>
          <hr className="border border-black/30" />
          <p className="font-light font-poppins text-sm tracking-wider leading-6 text-gray-600">
            Forgotten your password? Enter your email address below, and we'll
            email instructions for setting a new one.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            {forgotPasswordError && (
              <p className="flex justify-between items-center text-red-500 border-l-4 border-red-500 p-2 bg-red-50 rounded-sm">
                No email address found, please enter the correct email address.
                <CloseIcon
                  onClick={() => setForgotPasswordError(false)}
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
            <button
              className={`flex justify-center items-center gap-2 w-full rounded-sm  p-2 text-white  ${
                loading
                  ? "bg-button-color/50 cursor-wait"
                  : "bg-button-color hover:bg-button-color"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset my password"}
              {loading && <div className="forgotPassword-Loader"></div>}
            </button>
          </form>
          <div className="relative flex flex-col-reverse md:flex-row justify-between gap-2">
            <Link to="/log-in" className="text-blue-700">
              Back to log in
            </Link>
          </div>
        </div>
      </div>
      <MySnackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="We've sent a password reset link to your email! Please check your inbox to continue."
        key={vertical + horizontal}
      />
    </div>
  );
};
export default ForgotPassword;
