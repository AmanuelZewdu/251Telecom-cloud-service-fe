import { ShoppingCartTwoTone } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

export const CustomCard = ({
  title,
  description,
  color = "blue",
  icon,
  onClick = () => {},
}) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      className="px-8 p-4 rounded-lg shadow-sm hover:shadow-lg bg-white transition-all min-h-80 max-w-96"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2 items-start">
          {icon}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-2xl text-${color}-500`}
          >
            {title}
          </motion.h2>
          <p className="text-lg text-slate-500">{description}</p>
        </div>
        <div className="flex justify-end">
          <Button
            startIcon={<ShoppingCartTwoTone />}
            sx={{ textTransform: "capitalize", borderRadius: 20, px: 4 }}
            size="large"
            disableRipple
            onClick={onClick}
          >
            Order now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
