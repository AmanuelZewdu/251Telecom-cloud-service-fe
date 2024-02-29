import "./home.scss";
import { Button } from "@mui/material";
const Home = () => {
  return (
    <div className=" home-wrapper relative bg-no-repeat bg-cover bg-center flex items-center justify-center ">
      <div className="absolute bg-black opacity-50 inset-0"></div>
      <div className="relative flex flex-col gap-4 text-white p-2 my-7 text-center items-center">
        <h1 className="text-2xl font-semibold">
          Unlock Infinite Digital Potential.
        </h1>
        <p>
          Elevate your digital journey with us. Seamless solutions, limitless
          possibilities. Experience innovation, tailored for you
        </p>
        <Button variant="contained" className="w-[200px]">
          CTA
        </Button>
      </div>
    </div>
  );
};
export default Home;
