import { useRef } from "react";
import { CustomCard } from "./CustomCard";
import { features } from "./features";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export const Features = () => {
  const rootRef = useRef(null);
  return (
    <motion.div
      ref={rootRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="bg-gradient-to-br from-indigo-900 via-violet-800 to-fuchsia-800 p-4 sm:p-8"
    >
      <div className="max-w-screen-lg mx-auto">
        <div className="flex gap-4 sm:gap-6 md:gap-8 py-4 justify-center">
          {features.map((offer, index) => (
            <CustomCard key={index} {...offer} rootRef={rootRef} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
