const VirtualMachine = () => {
  return (
    <div className="h-screen w-full pt-6 text-center flex flex-col gap-12 p-2">
      <h1>Virtual Machine</h1>
      <div>
        <div className="border shadow-md flex flex-col p-2">
          <h2>Product details</h2>
          <div className="flex items-start">
            <h4>
              Product name: <span className="font-medium">Virtual Machine</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VirtualMachine;
