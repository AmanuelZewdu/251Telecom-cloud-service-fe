import { Button, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedBtn = motion(motion(Button));

export const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between py-2">
        <motion.img
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          className="h-20 w-20"
          src="biro.png"
          alt="Biro251 logo"
        />
        <AnimatedBtn
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          variant="contained"
          disableRipple
          disableElevation
          sx={{ borderRadius: 16 }}
        >
          Get Started
        </AnimatedBtn>
      </div>
    </div>
  );
};
