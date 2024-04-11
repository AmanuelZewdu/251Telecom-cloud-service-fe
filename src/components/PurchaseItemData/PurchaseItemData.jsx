const DataCollector = ({ children }) => {
  return (
    <div className="data-collector flex sticky flex-col gap-1 rounded-sm w-full bottom-0 bg-white shadow-[0px_-10px_12px_0px_#edf2f7] border border-button-color p-4 font-montserrat overflow-hidden text-left">
      {children}
    </div>
  );
};

export default DataCollector;
