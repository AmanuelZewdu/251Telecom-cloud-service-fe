import { Button } from "@mui/material";
import { useState } from "react";
import { memories, vCPUs } from "../../../shared/data/data.js";
const style = {
  borderBottom: "1px solid #f59e0b",
  color: "#f59e0b",
};

const VirtualMachine = () => {
  const [activeButton, setActiveButton] = useState("General Purpose");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <div className="h-screen w-full pt-6 text-center flex flex-col gap-8 p-2 md:text-left">
      <h1 className="text-2xl">Virtual Machine</h1>
      <details>
        <summary>What is VM?</summary>
        <p>
          {" "}
          Virtual machines represent a cornerstone of modern computing
          infrastructure, offering unparalleled flexibility and scalability for
          a diverse range of applications. Our virtual machine service provides
          users with the ability to deploy and manage virtualized computing
          environments effortlessly. Whether you're a small business or a large
          enterprise, virtual machines empower you to run multiple operating
          systems and applications on a single physical server, optimizing
          resource utilization and reducing infrastructure costs. Enjoy seamless
          migration, robust security features, and reliable performance as you
          leverage the power of virtualization to streamline your operations and
          drive innovation. With our virtual machine service, you can
          confidently scale your computing resources to meet the evolving needs
          of your business, ensuring maximum efficiency and agility in today's
          dynamic digital landscape.
        </p>
      </details>
      <div className="flex flex-col gap-4">
        <div className="border shadow-md flex text-left flex-col p-2 gap-2">
          <h2 className="text-lg font-semibold font-montserrat">
            Product details
          </h2>
          <div className="flex items-start">
            <h4>
              Product type: <span className="font-medium">Virtual Machine</span>
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="">VM type</h2>
            <div className="border flex bg-gray-100 w-fit rounded-md p-[0.5em] gap-4 md:mx-0">
              <button
                style={
                  activeButton === "General Purpose" ? style : { color: "gray" }
                }
                onClick={() => handleButtonClick("General Purpose")}
              >
                General Purpose
              </button>
              <button
                style={
                  activeButton === "Memory-Optimized"
                    ? style
                    : { color: "gray" }
                }
                onClick={() => handleButtonClick("Memory-Optimized")}
              >
                Memory-Optimized
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <h4>VM specifications:</h4>
            <div className="flex items-center gap-2">
              <h4>vCPU</h4>
              {
                <select className="w-[8em] p-2 bg-gray-100 rounded-md">
                  {vCPUs.map((vCPU) => (
                    <option value={vCPU.name} key={vCPU.name}>
                      {vCPU.name}
                    </option>
                  ))}
                </select>
              }
            </div>
            <div className="flex items-center gap-2">
              <h4>Memory</h4>
              {
                <select className="w-[8em] p-2 bg-gray-100 rounded-md">
                  {memories.map((memory) => (
                    <option value={memory.size} key={memory.size}>
                      {memory.size}
                    </option>
                  ))}
                </select>
              }
            </div>
          </div>
        </div>
        <div>
          <Button href="/log-in" variant="contained">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualMachine;
