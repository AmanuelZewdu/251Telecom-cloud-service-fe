import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const Layout = () => (
  <div className="min-h-screen">
    <div className="">
      <Navbar />
    </div>
    <Outlet />
    <Footer />
  </div>
);
