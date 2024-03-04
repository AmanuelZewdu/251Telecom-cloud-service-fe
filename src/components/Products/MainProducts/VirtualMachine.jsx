const VirtualMachine = () => {
  return (
    <div className="h-screen w-full pt-6 text-center flex flex-col gap-8 p-2 md:text-left">
      <h1 className="text-2xl">Virtual Machine</h1>
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
