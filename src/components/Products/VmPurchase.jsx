import HomeIcon from "@mui/icons-material/Home";
import VirtualMachine from "./MainProducts/VirtualMachine";
import { Link } from "react-router-dom";

const VmPurchase = () => {
  return (
    <div className="relative w-full mt-[6em] xl:mt-[7em] flex font-Inter">
      <div className="w-fit mx-auto ">
        <div className=" w-full text-primary-blue flex px-5 items-center gap-2 xl:mt-[2em]">
          <Link to="/">
            <HomeIcon sx={{ fontSize: 22 }} />
          </Link>
          <span className="mt-0.5">/</span>
          <h2 className="text-sm mt-1 underline">Virtual Machine</h2>
        </div>
        <div className="w-full relative -my-[0.8em] mx-auto">
          <VirtualMachine />
        </div>
      </div>
    </div>
  );
};
export default VmPurchase;
