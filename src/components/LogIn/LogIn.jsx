import { Formik } from "formik";

const LogIn = () => {
  const initialValues = { email: "", password: "" };

  return (
    <div className="w-full flex h-screen items-center justify-center gap-24">
      <div className="hidden w-[30em] md:flex ">
        <img
          className="h-full w-full"
          src={require("../../shared/images/heroRightImage.png")}
          alt=""
        />
      </div>
      <div className="flex-grow max-w-[30em] max-h-[30em]  border border-gray-500 p-4 rounded-lg">
        <div className="flex flex-col gap-4">
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="w-full">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="w-full p-2 border border-gray-400 rounded-sm"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div className="w-full">
                  <label htmlFor="password">Password</label>
                  <input
                    className="w-full p-2 border border-gray-400 rounded-sm"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <button
                  className="w-full rounded-sm bg-primary-medium p-2 text-white hover:bg-primary-light"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log in
                </button>
              </form>
            )}
          </Formik>
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
