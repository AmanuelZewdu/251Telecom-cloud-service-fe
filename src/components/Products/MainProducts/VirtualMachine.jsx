import "./mainProducts.scss";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { vmDescription } from "../../../shared/data/data.js";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import services from "../../../Services/services";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";

const VirtualMachine = () => {
  const [vmName, setVmName] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [duration, setDuration] = useState("");
  const [durationNumber, setDurationNumber] = useState("");
  const [error, setError] = useState(false);
  const [vmNameError, setVMNameError] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [instanceTypes, setInstanceTypes] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedVCPU, setSelectedVCPU] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [loading, setLoading] = useState(true);

  // side effect that fetches the instance types
  useEffect(() => {
    fetchInstanceType();
  }, []);

  // Selecting table row function starts here
  const handleCheckboxClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const selectedRowData =
    selectedRow !== null
      ? {
          vcpus: instanceTypes[selectedRow].vcpus,
          memory_mb: instanceTypes[selectedRow].memory_mb,
        }
      : null;

  console.log(selectedRowData);
  const handleDurationNumChange = (event) => {
    setDurationNumber(event.target.value); // This is duration time in numbers
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value); // this is selected duration period value
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value); // this is selected image string
  };

  const purchaseHandler = () => {
    if (!vmName) {
      setVMNameError(true);
    }

    if (
      !vmName ||
      selectedRow === null ||
      !selectedImage ||
      !durationNumber ||
      !duration
    ) {
      setError(true);
    } else {
      const existingItems =
        JSON.parse(localStorage.getItem("purchaseItems")) || [];

      const purchaseItem = {
        vcpus: selectedRowData.vcpus,
        memory_mb: mbToGBConverter(selectedRowData.memory_mb),
        name: vmName,
        imageId: selectedImage,
        // durationNumber: durationNumber,
        // duration: duration,
      };
      const updatedItems = [...existingItems, purchaseItem];
      localStorage.setItem("purchaseItems", JSON.stringify(updatedItems));
      window.dispatchEvent(new Event("storage"));
      setError(false);
      setIsItemAdded(true);
      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);
      alert(JSON.stringify(updatedItems, null, 2));
    }
  };

  const fetchInstanceType = async () => {
    try {
      const response = await services.getInstanceType();
      setInstanceTypes(response);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
    }
  };

  const uniquevCPUs = instanceTypes.reduce((acc, current) => {
    const vCPUs = acc.find((item) => item.vcpus === current.vcpus);
    if (!vCPUs) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const sortedUniquevCPUs = uniquevCPUs.sort((a, b) => a.vcpus - b.vcpus);

  const uniqueMemories = instanceTypes.reduce((acc, current) => {
    const memories = acc.find((item) => item.memory_mb === current.memory_mb);
    if (!memories) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const sortedMemories = uniqueMemories.sort(
    (a, b) => a.memory_mb - b.memory_mb
  );

  const mbToGBConverter = (memory_mb) => {
    const memoryInGB = memory_mb / 1024;
    return `${memoryInGB} GB`;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const paginatedInstanceTypes = instanceTypes.slice(
  //   page * rowsPerPage,
  //   page * rowsPerPage + rowsPerPage
  // );

  const handleVCPUChange = (event) => {
    setSelectedVCPU(event.target.value);
  };

  const handleMemoryChange = (event) => {
    setSelectedMemory(event.target.value);
  };

  // this func returns the instance types which are paginated and filtering logic is included in it.
  const filterAndSliceInstanceTypes = () => {
    const filteredInstanceTypes = instanceTypes.filter((instanceType) => {
      if (selectedVCPU && selectedMemory) {
        return (
          instanceType.vcpus === parseInt(selectedVCPU) &&
          instanceType.memory_mb === parseInt(selectedMemory)
        );
      } else if (selectedVCPU) {
        return instanceType.vcpus === parseInt(selectedVCPU);
      } else if (selectedMemory) {
        return instanceType.memory_mb === parseInt(selectedMemory);
      } else {
        return true;
      }
    });

    const slicedInstanceTypes = filteredInstanceTypes.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    return slicedInstanceTypes;
  };

  return (
    <div className=" w-full pt-6 text-center flex flex-col gap-4 p-2 md:text-left font-montserrat">
      <h1 className="text-2xl tracking-wide">Virtual Machine</h1>
      <details className="open:bg-white dark:open:bg-gray-100 p-2 open:shadow-lg  rounded-md">
        <summary className="text-sm leading-6 text-slate-900 select-none">
          What is VM?
        </summary>
        <p className="mt-3 text-sm leading-7 text-slate-900">{vmDescription}</p>
      </details>
      <div className="flex flex-col gap-4">
        <div className="border shadow-md flex text-left flex-col p-4 gap-2">
          <h2 className="text-lg font-medium font-poppins">Product details</h2>
          <div className="flex items-start">
            <h4>
              Product type: <span className="font-medium">Virtual Machine</span>
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <input
              title="You can name it whatever you want"
              placeholder="VM name"
              type="text"
              name="vmName"
              id="vmName"
              value={vmName}
              onChange={(e) => setVmName(e.target.value)}
              className="border-b w-[13em] outline-none border-gray-400 placeholder:text-gray-400"
            />
            {vmNameError && (
              <p className="text-xs text-red-500">Please proivde a vm name</p>
            )}
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <h4>VM specifications:</h4>
            <div className="flex items-center gap-2">
              <h4>vCPU</h4>
              <select
                id="vCPUSelect"
                className="w-[8em] p-2 bg-gray-100 rounded-md"
                defaultValue=""
                onChange={handleVCPUChange}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                {sortedUniquevCPUs.map((instancevCPUs, index) => (
                  <option
                    value={instancevCPUs.vcpus}
                    key={instancevCPUs.name + index}
                  >
                    {instancevCPUs.vcpus} vCPU
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <h4>Memory</h4>
              {
                <select
                  id="memorySelect"
                  className="w-[8em] p-2 bg-gray-100 rounded-md"
                  defaultValue=""
                  onChange={handleMemoryChange}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {sortedMemories.map((memory) => (
                    <option value={memory.memory_mb} key={memory.memory_mb}>
                      {mbToGBConverter(memory.memory_mb)}
                    </option>
                  ))}
                </select>
              }
            </div>
          </div>
          <TableContainer
            component={Paper}
            style={{ minHeight: "30em", maxHeight: "20em", maxWidth: "50em" }}
          >
            <Table
              sx={{ minHeight: "26.9em" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className="bg-gray-200 ">
                  <TableCell></TableCell>
                  <TableCell>Instance name</TableCell>
                  <TableCell align="left">vCPUs</TableCell>
                  <TableCell align="left">Memory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  filterAndSliceInstanceTypes().map((instanceType, index) => (
                    <TableRow
                      key={instanceType.name + index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={selectedRow === index}
                          onChange={() => handleCheckboxClick(index)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {instanceType.name}
                      </TableCell>
                      <TableCell align="left">
                        <span className="flex items-center">
                          {" "}
                          {`${instanceType.vcpus} vCPU`}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        {mbToGBConverter(instanceType.memory_mb)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <TablePagination
              className="bg-gray-200 w-full flex items-center justify-center"
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={instanceTypes.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
        <div className="border shadow-md flex text-left flex-col p-4 gap-6">
          <div className="mt-4 flex flex-col w-ful">
            <h4 className="text-lg font-medium font-poppins">
              Image Management
            </h4>
            <div className="flex items-center gap-2">
              <label>Image:</label>
              <select
                name="image"
                className="w-[12em] p-2 bg-gray-100 rounded-md"
                value={selectedImage}
                onChange={handleImageChange}
              >
                {Array.from({ length: 20 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex gap-4 items-center">
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
                      ? "bg-primary-medium text-white"
                      : "bg-slate-200 text-gray-500"
                  } p-1 text-sm w-[5em] rounded-l-md md:text-base`}
                  onClick={() => setDuration("month")}
                >
                  Month
                </button>
                <button
                  className={`${
                    duration === "year"
                      ? "bg-primary-medium text-white"
                      : "bg-slate-200 text-gray-500"
                  } p-1 text-sm w-[5em] rounded-r-md md:text-base border-gray-400 border-s`}
                  onClick={() => setDuration("year")}
                >
                  Year
                </button>
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex gap-2">
            <label htmlFor="auto_renewal">Auto-Renewal:</label>
            <input
              className="accent-primary-medium caret-white"
              type="checkbox"
              name="auto_renewal"
            />
          </div>
        </div>
      </div>
      <div className="flex sticky flex-col gap-1 rounded-sm w-full bottom-0 bg-white shadow-[0px_-10px_12px_0px_#edf2f7] border border-primary-light p-4 font-montserrat overflow-hidden">
        {error && (
          <span className=" text-left text-red-500">
            Please make sure you have selected al available options*
          </span>
        )}
        <div className="background">
          <img
            src="https://img.freepik.com/free-vector/cloud-connection-abstract-concept-illustration_335657-3873.jpg?t=st=1709288253~exp=1709291853~hmac=ab41542d2428067bbc018ac3e75e724f7ddaf324ca5d52be87a31f4984f449ca&w=826"
            alt=""
          />
        </div>
        <div className="flex gap-2">
          <h3 className="">VM type:</h3>
          <span>
            {selectedRowData?.vcpus ? `${selectedRowData.vcpus} vCPU` : ""}
          </span>
          -
          <span>
            {selectedRowData?.memory_mb
              ? `${mbToGBConverter(selectedRowData.memory_mb)}`
              : ""}
          </span>
        </div>
        <div className="flex gap-2">
          <h3 className="">Selected image:</h3>
          <span>{selectedImage || "-"}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="">Duration:</h3>
          <span>{durationNumber ? durationNumber : "-"}</span>
          <span>{duration ? duration : "-"}</span>
        </div>
        <div className="flex gap-4 items-center z-50">
          <Button
            style={{
              fontSize: "12px",
              backgroundColor: "#f59e0b",
            }}
            className="w-[7em] md:w-[10em]"
            variant="contained"
            href="/log-in"
            onClick={purchaseHandler}
          >
            Buy
          </Button>
          <Button
            onClick={purchaseHandler}
            style={{
              fontSize: "12px",
              backgroundColor: "transparent",
              border: "1px solid #f59e0b",
              color: "#f59e0b",
            }}
            variant="contained"
          >
            Add to Cart
          </Button>
        </div>
      </div>
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

export default VirtualMachine;
