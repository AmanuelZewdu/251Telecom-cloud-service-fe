import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";

export const Biro251Layout = () => {
  return (
    <motion.div className="min-h-screen flex flex-col bg-slate-100 scroll-smooth">
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </motion.div>
  );
};
