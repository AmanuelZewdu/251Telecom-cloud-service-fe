import CallUs from "../CallUs/CallUs";
import "./hero.scss";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

const HeroButton = styled(Button)({
  textTransform: "none",
  fontSize: "1em",
  fontWeight: "semi-bold",
});

const Hero = () => {
  return (
    <div className="hero-wrapper font-montserrat w-full relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center h-svh">
      {/* <div className="absolute bg-black opacity-5 w-full h-svh "></div> */}

      <div className="relative flex flex-col p-2 text-center items-center justify-center">
        <h1 className="text leading-none  p-2 rounded-lg text-primary-blue font-bold">
          Your <span className="text-animation ">Data</span> Our
          <span className="text-animation "> Priority.</span>
        </h1>
        <p className="max-w-[31em] text-lg text-primary-blue p-2 ml-3">
          Elevate your digital journey with us. Seamless solutions, limitless
          possibilities. Experience innovation, tailored for you
        </p>
        <div className="p-2">
          <Link
            to="/products
            "
          >
            <HeroButton
              sx={{
                backgroundColor: "#BC68B2",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#BC68B2",
                },
              }}
              variant="contained"
              className=""
            >
              Lets get started ...
            </HeroButton>
          </Link>
        </div>
      </div>
      <KeyboardDoubleArrowDownIcon
        className="absolute animate-bounce bottom-0 text-primary-blue"
        sx={{ fontSize: 62 }}
      />
      <CallUs />
    </div>
  );
};
export default Hero;
