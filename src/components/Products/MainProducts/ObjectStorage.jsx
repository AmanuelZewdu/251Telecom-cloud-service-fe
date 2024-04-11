import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { obDescription } from "../../../shared/data/data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import service from "../../../Services/services";
import PurchaseItemData from "../../PurchaseItemData/PurchaseItemData";

const ObjectStorage = () => {
  useEffect(() => {
    fetchDiskType();
  }, []);

  const [objName, setObjName] = useState("");
  const [objNameError, setObjNameError] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [billingMode, setBillingMode] = useState("");
  const [selectedDisk, setSelectedDisk] = useState("");
  const [duration, setDuration] = useState("");
  const [durationNumber, setDurationNumber] = useState("");
  const [DiskTypes, setDiskTypes] = useState([]);
  const [error, setError] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const handleDurationChange = (event) => {
    setBillingMode(event.target.value); // this is selected duration period value
  };

  const handleDiskChange = (event) => {
    setSelectedDisk(event.target.value);
  };

  const handleDurationNumChange = (event) => {
    setDurationNumber(event.target.value);
  };

  const fetchDiskType = async () => {
    try {
      const response = await service.getMachineImages();
      setDiskTypes(response);
    } catch (error) {
      console.error(error);
      console.log(error.message);
      setFetchError(true);
    }
  };

  const purchaseHandler = () => {
    if (!objName) {
      setObjNameError(true);
    }

    const existingItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    console.log(existingItems);

    if (!billingMode || !selectedDisk || !duration || !durationNumber) {
      setError(true);
    } else {
      const purchaseItems = {
        objName,
        billingMode,
        diskType: selectedDisk,
        durationNumber,
        duration,
        serviceType: "Object storage",
      };
      const updatedItems = [...existingItems, purchaseItems];
      alert(JSON.stringify(purchaseItems, null, 2));
      localStorage.setItem("purchaseItems", JSON.stringify(updatedItems));
      window.dispatchEvent(new Event("storage"));
      setObjNameError(false);
      setError(false);
      setIsItemAdded(true);
      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);
    }
  };

  return (
    <div className=" w-full pt-6 text-center flex flex-col gap-4 p-2 md:text-left font-montserrat">
      <h1 className="text-2xl tracking-wide">Object Storage</h1>
      {fetchError && (
        <p>
          "Oops! Something went wrong while fetching disk images. Please try
          again later."
        </p>
      )}
      <details className="open:bg-white dark:open:bg-gray-100 p-2 open:shadow-lg  rounded-md">
        <summary className="text-sm leading-6 text-slate-900 select-none">
          What is Object storage?
        </summary>
        <p className="mt-3 text-sm leading-7 text-slate-900">{obDescription}</p>
      </details>
      <div className="flex flex-col gap-4">
        <div className="border shadow-md flex text-left flex-col p-4 gap-4">
          {" "}
          <h2 className="text-lg font-medium font-poppins">Product details</h2>
          <div className="flex items-start">
            <h4>
              Product type: <span className="font-medium">Object storage</span>
            </h4>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <input
              title="You can name it whatever you want"
              placeholder="Object storage name"
              type="text"
              name="vmName"
              id="vmName"
              value={objName}
              onChange={(e) => setObjName(e.target.value)}
              className="border-b w-[13em] outline-none border-gray-400 placeholder:text-gray-400"
            />
            {objNameError && (
              <p className="text-xs text-red-500">
                Please proivde a Object storage name
              </p>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <h4>Billing mode:</h4>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={billingMode}
                onChange={handleDurationChange}
              >
                <button
                  className={`${
                    billingMode === "yearly/monthly"
                      ? "bg-button-color text-white"
                      : "bg-slate-200 text-gray-500"
                  } px-2 text-sm rounded-l-md md:text-base`}
                  onClick={() => setBillingMode("yearly/monthly")}
                >
                  Yearly/Monthly
                </button>
                <button
                  className={`${
                    billingMode === "pay-per-use"
                      ? "bg-button-color text-white"
                      : "bg-slate-200 text-gray-500"
                  } px-2 py-1 text-sm rounded-r-md md:text-base border-gray-400 border-s`}
                  onClick={() => setBillingMode("pay-per-use")}
                >
                  Pay-per-use
                </button>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="border shadow-md flex text-left flex-col p-4 gap-4">
          <h4 className="text-lg font-medium font-poppins">Disk Management</h4>
          <div className="flex items-center gap-2">
            <label>Disk type:</label>
            <select
              name="disk"
              className="w-[12em] p-2 bg-gray-100 rounded-md"
              value={selectedDisk}
              onChange={handleDiskChange}
            >
              <option value="" disabled hidden>
                Select disk type{" "}
              </option>
              {DiskTypes.map((machineImage, index) => (
                <option key={machineImage.id + index}>
                  {machineImage.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <label>Duration:</label>
              <select
                name="duration"
                className="w-[8em] p-2 bg-gray-100 rounded-md"
                value={durationNumber}
                onChange={handleDurationNumChange}
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={duration}
                onChange={handleDurationChange}
              >
                <button
                  className={`${
                    duration === "month"
                      ? "bg-button-color text-white"
                      : "bg-slate-200 text-gray-500"
                  } p-1 text-sm w-[5em] rounded-l-md md:text-base`}
                  onClick={() => setDuration("month")}
                >
                  Month
                </button>
                <button
                  className={`${
                    duration === "year"
                      ? "bg-button-color text-white"
                      : "bg-slate-200 text-gray-500"
                  } p-1 text-sm w-[5em] rounded-r-md md:text-base border-gray-400 border-s`}
                  onClick={() => setDuration("year")}
                >
                  Year
                </button>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <PurchaseItemData>
        {error && (
          <span className=" text-left text-red-500">
            Please make sure you have selected all available options*
          </span>
        )}
        <div className="background">
          <img
            className="max-w-full"
            src={require("../../../shared/images/vmImage.png")}
            alt="Your Company Logo"
          />
        </div>
        <div className="flex gap-2">
          <h3>Object strogae name:</h3>
          <span>{objName || "-"}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="">Billing mode:</h3>
          <span>{billingMode || "-"}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="">Selected disk type:</h3>
          <span>{selectedDisk || "-"}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="">Duration:</h3>
          <span>{durationNumber ? durationNumber : "-"}</span>
          <span>{duration ? duration : "-"}</span>
        </div>

        <div className="flex gap-4 items-center z-50">
          <Button
            onClick={purchaseHandler}
            style={{
              fontSize: "12px",
              backgroundColor: "#BC68B2",
            }}
            className="w-[7em] md:w-[10em]"
            variant="contained"
            href="/log-in"
          >
            Buy
          </Button>
          <Button
            onClick={purchaseHandler}
            style={{
              fontSize: "12px",
              backgroundColor: "white",
              border: "1px solid #BC68B2",
              color: "#BC68B2",
            }}
            variant="contained"
          >
            Add to Cart
          </Button>
        </div>
      </PurchaseItemData>
      {isItemAdded && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/10">
          <div className="border border-green-500 bg-white p-3 mx-auto rounded-md shadow-md flex items-center justify-center gap-2 mt-8 animate-bounce">
            <CheckCircleIcon className="text-green-600" />
            <p className="text-green-600 text-sm font-medium font-poppins">
              Item added to the cart!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ObjectStorage;
