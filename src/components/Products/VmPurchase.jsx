import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VirtualMachine from "./MainProducts/VirtualMachine";

const VmPurchase = () => {
  return (
    <div className="relative w-full top-[5em] flex font-poppins">
      <div className="absolute left-4 top-6 flex items-center gap-1 md:top-3 md:left-1 xl:top-[4em] xl:left-4">
        <KeyboardBackspaceIcon sx={{ fontSize: 22, color: "gray" }} />
        <a
          href="/
        "
        >
          <span className="text-sm md:text-sm text-gray-600">
            <span className="hidden md:inline-block">back to</span> home
          </span>
        </a>
      </div>
      <div className="w-full md:mt-8 xl:mt-[1.35m] max-w-[60em] mx-auto">
        <VirtualMachine />
      </div>
    </div>
  );
};
export default VmPurchase;
