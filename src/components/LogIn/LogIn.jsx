import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full flex h-screen items-center justify-center gap-24 p-2">
      <div className="hidden w-[30em] md:flex ">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em] max-h-[30em]  border border-gray-500 p-4 rounded-lg">
        <div className="flex flex-col gap-4">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="email">Email:</label>
              <input
                className="w-full p-2 border border-gray-400 rounded-sm"
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                className="w-full p-2 border border-gray-400 rounded-sm"
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              className="w-full rounded-sm bg-primary-medium p-2 text-white hover:bg-primary-light"
              type="submit"
            >
              Log in
            </button>
          </form>

          <div className="relative flex gap-2">
            <p className="">Don't have an account?</p>
            <a href="/sign-up" className="text-blue-700">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
