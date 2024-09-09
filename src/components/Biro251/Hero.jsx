import { ArrowForward } from "@mui/icons-material";
import { Button, duration } from "@mui/material";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedButton = motion(motion(Button));

export const Hero = () => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="max-w-screen-lg mx-auto"
  >
    <div className="grid grid-cols-2 gap-4 items-start py-4">
      <div className="flex flex-col justify-between items-start gap-6">
        <div className="space-y-2">
          <motion.h1
            variants={item}
            className="text-5xl font-bold text-slate-500"
          >
            A <span className="font-extrabold text-animation">storage</span> for
            all your needs.
          </motion.h1>
          <motion.p variants={item} className="text-2xl">
            Effortlessly share and collaborate with your team, all with
            top-notch security.
          </motion.p>
        </div>
        <AnimatedButton
          whileHover={{
            shadow: 10,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          variants={item}
          variant="contained"
          disableRipple
          size="large"
          endIcon={<ArrowForward />}
          sx={{ borderRadius: 16 }}
        >
          Get started
        </AnimatedButton>
      </div>
      <motion.img
        variants={item}
        src="hero.jpg"
        alt="Hero picture"
        className="aspect-video w-auto rounded-xl"
      />
    </div>
  </motion.div>
);
