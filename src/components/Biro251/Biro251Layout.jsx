import Footer from "../Footer/Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";

export const Biro251Layout = ({ children }) => {
  return (
    <motion.div
      layout
      className="min-h-screen flex flex-col bg-slate-100 scroll-smooth"
    >
      <div className="flex-1">
        <Header />
        {children}
      </div>
      <Footer />
    </motion.div>
  );
};
