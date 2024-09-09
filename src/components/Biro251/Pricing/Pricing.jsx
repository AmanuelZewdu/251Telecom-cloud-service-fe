import { useState } from "react";
import { pricing } from "./pricing";
import {
  Box,
  Button,
  Paper,
  Radio,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CheckCircle, ShoppingCartTwoTone } from "@mui/icons-material";
import { motion } from "framer-motion";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: 20,
    padding: "6px 16px",
    textTransform: "capitalize",
    fontWeight: "semibold",
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

export const Pricing = () => {
  const [option, setOpetion] = useState("business");

  const colors = ["bg-zinc-500", "bg-green-500", "bg-yellow-500"];

  return (
    <motion.div layout className="max-w-screen-lg mx-auto my-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col  gap-2 sm:gap-4 items-center"
      >
        <h1 className="text-3xl text-primary-blue text-center">Pricing</h1>
        <Paper
          elevation={0}
          sx={(theme) => ({
            border: 0,
            borderRadius: 20,
            width: "fit-content",
            display: "flex",
            border: `1px solid ${theme.palette.divider}`,
            flexWrap: "wrap",
          })}
        >
          <StyledToggleButtonGroup
            color="success"
            value={option}
            exclusive
            onChange={(e, option) => setOpetion(option)}
            aria-label="pricing option"
          >
            <ToggleButton disableRipple value="business" aria-label="business">
              Business
            </ToggleButton>
            <ToggleButton disableRipple value="personal" aria-label="personal">
              Personal
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
      </motion.div>

      <motion.div
        animate={{ transition: { staggerChildren: 0.5 } }}
        className="grid grid-cols-3 mt-2 gap-4 sm:gap-6 md:gap-8 py-4 justify-center transition-all ease-in-out"
      >
        {pricing[option].map(({ title, price, features, popular }, index) => (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: popular ? 1.1 : 1,
            }}
            viewport={{ amount: "some" }}
            key={title}
            className="space-y-4 p-4 flex flex-col justify-between bg-white rounded-lg my-4 min-h-[416px]  hover:shadow-lg transition-all relative"
          >
            <div>
              <h1 className="mt-2">
                <span className="text-3xl font-light">
                  {price.toLocaleString("en", {
                    style: "currency",
                    currency: "ETB",
                  })}
                </span>{" "}
                <span className="text-slate-400 text-sm"> / month</span>
              </h1>
              <h2
                className={`text-xs uppercase text-white px-2 py-1 rounded-full tracking-wider absolute -top-3 right-2 ${colors[index]}`}
              >
                {title}
              </h2>
              <Stack position="relative">
                <h3 className="text-sm uppercase text-slate-400 tracking-wider mt-3 my-2">
                  Included Features
                </h3>
                {features.map((feat, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    <Stack direction="row" gap={1}>
                      <span className="text-slate-500 text-xl">•</span>
                      <span className="text-base text-slate-700">{feat}</span>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </div>
            <Button
              variant="outlined"
              color="info"
              startIcon={<ShoppingCartTwoTone />}
              disableRipple
            >
              Purchase
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
