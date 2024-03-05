import { Button } from "@mui/material";
import { useState } from "react";

const style = {
  borderBottom: "1px solid #f59e0b",
  color: "#f59e0b",
};

const VirtualMachine = () => {
  const [activeButton, setActiveButton] = useState("Default");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <div className="h-screen w-full pt-6 text-center flex flex-col gap-8 p-2 md:text-left">
      <h1 className="text-2xl">Virtual Machine</h1>
      <div className="border bg-gray-200 w-fit rounded-md p-[4px] mx-auto md:mx-0">
        <Button
          sx={activeButton === "Default" ? style : { color: "gray" }}
          onClick={() => handleButtonClick("Default")}
        >
          Default
        </Button>
        <Button
          sx={activeButton === "Customize" ? style : { color: "gray" }}
          onClick={() => handleButtonClick("Customize")}
        >
          Customize
        </Button>
      </div>
      <div>
        <div className="border shadow-md flex text-left flex-col p-2 gap-2">
          <h2 className="text-lg font-semibold font-montserrat">
            Product details
          </h2>
          <div className="flex items-start">
            <h4>
              Product type: <span className="font-medium">Virtual Machine</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualMachine;
