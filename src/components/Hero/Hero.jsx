import "./hero.scss";
import { Button } from "@mui/material";
const Hero = () => {
  return (
    <div className="hero-wrapper w-full relative bg-no-repeat bg-cover bg-center flex items-center justify-center h-screen md:h-[30em]">
      <div className="absolute bg-black opacity-40 inset-0"></div>
      <div className="flex flex-col-reverse items-center lg:flex-row ">
        <div className="relative flex flex-col gap-4 text-white p-2 lg:mt-10 text-center items-center lg:items-start lg:text-left justify-center lg:ml-20">
          <h1 className="text leading-none text-2xl font-semibold lg:w-[12em]">
            Unlock Infinite Digital Potential.
          </h1>
          <p className="max-w-[30em] font-light">
            Elevate your digital journey with us. Seamless solutions, limitless
            possibilities. Experience innovation, tailored for you
          </p>
          <Button
            sx={{
              backgroundColor: "#f59e0b",
              "&:hover": {
                backgroundColor: "#d28602",
              },
            }}
            variant="contained"
            className="w-[120px] rounded-none"
          >
            CTA
          </Button>
        </div>
        <div className="md:w-[15em] lg:w-[25em] md:mt-20 hidden md:flex items-center justify-center">
          <img
            className=""
            src={require("../../shared/images/heroRightImage.png")}
            alt="cloud"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
