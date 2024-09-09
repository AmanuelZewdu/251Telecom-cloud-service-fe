import { motion } from "framer-motion";

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const CustomCard = ({ title, description, icon, rootRef }) => {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ root: rootRef, amount: "some" }}
      className="px-8 p-4 rounded-lg shadow-sm hover:shadow-xl transition-all bg-white/10  min-w-60 max-w-96 backdrop-blur-xl"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2 items-start">
          <div className="flex flex-col gap-2 items-center">
            {icon}
            <h2 className={`text-xl text-blue-200`}>{title}</h2>
          </div>
          <p className="text-md text-center text-slate-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
