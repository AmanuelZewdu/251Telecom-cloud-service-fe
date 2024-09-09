import { motion } from "framer-motion";
export const Common = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
      className="w-full min-h-40 relative"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary-blue/20 via-blue-300/20 to-cyan-500/40 -skew-y-1 "></div>
      <div className="w-full z-10 relative min-h-40 flex justify-center items-center">
        <div className="flex items-center gap-4 p-4 z-10">{children}</div>
      </div>
    </motion.div>
  );
};
