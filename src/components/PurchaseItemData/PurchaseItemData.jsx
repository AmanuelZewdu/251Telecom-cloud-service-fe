const DataCollector = ({ children }) => {
  return (
    <div className="data-collector sticky text-light-black font-Inter rounded-sm w-full bottom-0 bg-white shadow-[0px_-10px_12px_0px_#edf2f7] border border-button-color p-4 overflow-hidden text-left">
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};

export default DataCollector;
