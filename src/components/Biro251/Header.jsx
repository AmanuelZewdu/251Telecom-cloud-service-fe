import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedBtn = motion(motion(Button));

export const Header = () => {
  return (
    <div className="border-b-2 border-slate-200 mb-2">
      <div className="max-w-screen-lg mx-auto ">
        <div className="flex items-center justify-between p-2">
          <Link to="/biro251">
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
          </Link>
          <AnimatedBtn
            initial={{ opacity: 0, y: -80 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            variant="contained"
            disableRipple
            disableElevation
            sx={{ borderRadius: 16 }}
          >
            Get Started
          </AnimatedBtn>
        </div>
      </div>
    </div>
  );
};
