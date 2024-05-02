import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInUser = () => {
      const currentUser = JSON.parse(sessionStorage.getItem("loggedIn-user"));
      setIsUserLoggedIn(!!currentUser?.access_token);
    };
    window.addEventListener("storage", checkLoggedInUser);

    checkLoggedInUser();

    return () => {
      window.removeEventListener("storage", checkLoggedInUser);
    };
  }, []);

  console.log(!isUserLoggedIn);
  return isUserLoggedIn ? <Navigate to="/log-in" /> : <Outlet />;
}
