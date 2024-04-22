import "./reset.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import services from "../../Services/services";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

const Reset = () => {
  const [visible, setVisibile] = useState(false);
  const [resetError, setResetError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    console.log("called");
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
  const handleVisibility = () => {
    setVisibile(!visible);
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required*"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required*"),
    }),

    onSubmit: async (values) => {
      console.log("user credentials=>", values);

      try {
        setLoading(true);
        const { data, statusCode } = await services.getInstanceType(values);
        console.log(data);
        if (statusCode !== 200) {
          localStorage.setItem("loggedIn-user", JSON.stringify(data));
          setSnackbarMessage(
            "Congratulations! Your password has been successfully reset. You can now log in with your new password."
          );
          handleClick({ vertical: "top", horizontal: "center" })();
          setTimeout(() => {
            navigate("/");
          }, 3000);
          setLoading(false);
        } else {
          setSnackbarMessage(
            "Oops! We're experiencing a small hiccup on our end. Please try again later or contact support if the issue persists."
          );
          handleClick({ vertical: "top", horizontal: "center" })();
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
        handleClick({ vertical: "top", horizontal: "center" })();
        setLoading(false);
      }
    },
  });
  return (
    <div className="w-full font-montserrat flex h-screen items-center justify-center p-4 reset">
      <div className="hidden w-[30em] lg:flex overflow-hidden">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em] max-h-[30em] bg-white rounded-sm shadow-2xl">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl font-medium text-gray-700">Reset</h1>
          <hr className="border border-black/30" />
          <p className="font-light font-poppins text-sm tracking-wider leading-6 text-gray-600">
            Please remember to choose a strong password that contains a mix of
            letters, numbers, and special characters for increased security.
            <span className="text-red-500 font-semibold">*</span>
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            {resetError && (
              <p className="flex justify-between items-center text-red-500 border-l-4 border-red-500 p-2 bg-red-50 rounded-sm">
                Unauthorized. Please Reset with correct credentials.
                <CloseIcon
                  onClick={() => setResetError(false)}
                  className="cursor-pointer"
                  fontSize="small"
                />
              </p>
            )}
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
            <div className="relative w-full">
              <label htmlFor="password" className="text-gray-900">
                Confirm password:
              </label>
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
                placeholder="Confirm password"
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

            <button
              className={`flex justify-center items-center gap-2 w-full rounded-sm  p-2 text-white  ${
                loading
                  ? "bg-button-color/50 cursor-wait"
                  : "bg-button-color hover:bg-button-color"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting" : "Submit"}
              {loading && <div className="reset-Loader"></div>}
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
        message={snackbarMessage}
        key={vertical + horizontal}
      />
    </div>
  );
};
export default Reset;
