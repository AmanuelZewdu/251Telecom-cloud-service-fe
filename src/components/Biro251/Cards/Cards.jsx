import { BusinessTwoTone, PersonTwoTone } from "@mui/icons-material";
import { CustomCard } from "./CustomCard";
import { motion } from "framer-motion";

const offers = [
  {
    title: "For businesses",
    icon: (
      <div
        className={`w-fit text-indigo-500 bg-indigo-500/10 rounded-full p-2 flex justify-center items-center`}
      >
        <BusinessTwoTone fontSize="large" />
      </div>
    ),
    description:
      "Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe — all in one place",
  },
  {
    title: "For personal uses",
    icon: (
      <div
        className={`w-fit text-purple-500 bg-purple-500/10 rounded-full p-2 flex justify-center items-center`}
      >
        <PersonTwoTone fontSize="large" />
      </div>
    ),
    description:
      "Keep everything that's important to you  and your family safe and shareable in one place. Back up files in the cloud, share photos and videos and more",
  },
];

export const Cards = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
      children: { stagger: 1 },
    }}
    viewport={{ amount: 0.5, once: true }}
    className="max-w-screen-lg mx-auto"
  >
    <div className="flex gap-4 sm:gap-8 md:gap-12 py-4 justify-center">
      {offers.map((offer, index) => (
        <CustomCard key={index} {...offer} />
      ))}
    </div>
  </motion.div>
);
