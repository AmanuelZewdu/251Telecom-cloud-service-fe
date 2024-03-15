import "./mainProducts.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  memories,
  vCPUs,
  rows,
  vmDescription,
} from "../../../shared/data/data.js";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import ReusableModal from "../../ResuableModal/ReusableModal.jsx";
import { useCart } from "../../CartContext/CartContext.jsx";

const VirtualMachine = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [duration, setDuration] = useState("");
  const [durationNumber, setDurationNumber] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();
  // Selecting table row function starts here
  const handleCheckboxClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const selectedRowData = selectedRow !== null ? rows[selectedRow] : null;

  const selectedRowJSON = selectedRowData
    ? {
        name: selectedRowData.name,
        vCPUs_memory: selectedRowData.vCPUs_memory,
      }
    : null; // This is selected row valye in json format

  // Radio buttons style start here
  const StyledFormControlLabel = styled(FormControlLabel)(
    ({ theme, checked }) => ({
      ".MuiRadio-root": {
        color: checked ? "#f59e0b" : "inherit", // Change radio color to yellow when checked
      },
      ".MuiFormControlLabel-label": {
        color: checked ? "#f59e0b" : "inherit", // Change label color to yellow when checked
      },
    })
  );

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value); // this is selected image type value
  };
  // Radio ends here

  const handleDurationNumChange = (event) => {
    setDurationNumber(event.target.value); // This is duration time in numbers
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value); // this is selected duration period value
  };

  const handlevCPUFilter = (event) => {
    const selectedvCPU = event.target.value;
    const selectedMemory = document.getElementById("memorySelect").value;

    const newFilteredRows = rows.filter(
      (row) =>
        row.vCPUs_memory.includes(selectedvCPU) &&
        row.vCPUs_memory.includes(selectedMemory)
    );

    setFilteredRows(newFilteredRows);
  };

  const handleMemoryFilter = (event) => {
    const selectedMemory = event.target.value;
    const selectedvCPU = document.getElementById("vCPUSelect").value;

    const newFilteredRows = rows.filter(
      (row) =>
        row.vCPUs_memory.includes(selectedMemory) &&
        row.vCPUs_memory.includes(selectedvCPU)
    );

    setFilteredRows(newFilteredRows);
  };

  const purchaseHandler = () => {
    const purchaseItem = {
      ...selectedRowJSON,
      selectedImage: selectedImage,
      durationNumber: durationNumber,
      duration: duration,
    };
    console.log(selectedRowJSON);
    if (!selectedRow || !selectedImage || !durationNumber || !duration) {
      setError(true);
    } else {
      localStorage.setItem("purchaseItem", JSON.stringify(purchaseItem));
      addToCart();
      console.log("Saved to localStorage");
    }
  };

  return (
    <div className=" w-full pt-6 text-center flex flex-col gap-4 p-2 md:text-left">
      <h1 className="text-2xl">Virtual Machine</h1>
      <details className="open:bg-white dark:open:bg-gray-100 p-2 open:shadow-lg  rounded-md">
        <summary className="text-sm leading-6 text-slate-900 select-none">
          What is VM?
        </summary>
        <p className="mt-3 text-sm leading-7 text-slate-900">{vmDescription}</p>
      </details>
      <div className="flex flex-col gap-4">
        <div className="border shadow-md flex text-left flex-col p-4 gap-2">
          <h2 className="text-lg font-semibold font-montserrat">
            Product details
          </h2>
          <div className="flex items-start">
            <h4>
              Product type: <span className="font-medium">Virtual Machine</span>
            </h4>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <h4>VM specifications:</h4>
            <div className="flex items-center gap-2">
              <h4>vCPU</h4>
              <select
                id="vCPUSelect"
                className="w-[8em] p-2 bg-gray-100 rounded-md"
                defaultValue=""
                onChange={handlevCPUFilter}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                {vCPUs.map((vCPU) => (
                  <option value={vCPU.name} key={vCPU.name}>
                    {vCPU.name}
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
                  onChange={handleMemoryFilter}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {memories.map((memory) => (
                    <option value={memory.size} key={memory.size}>
                      {memory.size}
                    </option>
                  ))}
                </select>
              }
            </div>
          </div>
          <TableContainer
            component={Paper}
            style={{ maxHeight: "20em", maxWidth: "40em" }}
          >
            <Table
              sx={{ maxWidth: "50em" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Flavor name</TableCell>
                  <TableCell align="left">vCPUs_memory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row, index) => (
                  <TableRow
                    key={row.name}
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
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.vCPUs_memory}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="border shadow-md flex text-left flex-col p-4 gap-6">
          <div className="mt-4 flex flex-col w-ful">
            <h4 className="text-lg font-semibold font-montserrat">
              Image Management
            </h4>
            <div className="flex gap-2 items-center ">
              <h4>Image:</h4>
              <RadioGroup
                row
                name="use-radio-group"
                value={selectedImage}
                onChange={handleImageChange}
              >
                <MyFormControlLabel
                  value="windows"
                  label="Windows"
                  control={<Radio />}
                />
                <MyFormControlLabel
                  value="linux"
                  label="Linux"
                  control={<Radio />}
                />
              </RadioGroup>
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
      <div className="flex sticky flex-col gap-1 rounded-sm w-full bottom-0 bg-white shadow-[0px_-10px_12px_0px_#edf2f7] border border-primary-light p-4 font-montserrat">
        {error && (
          <span className=" text-left text-red-500">
            Please make sure you have selected al available options*
          </span>
        )}
        <div className="flex gap-2">
          <h3 className="">VM type:</h3>
          <span>{selectedRowJSON?.name || ""}</span>-
          <span>{selectedRowJSON?.vCPUs_memory || ""}</span>
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
        <div className="flex gap-4 items-center">
          <ReusableModal
            button_style={{
              border: "1px solid #f59e0b",
              color: "#f59e0b",
              fontSize: "12px",
              backgroundColor: "#fff",
            }}
            className="md:w-[15em]"
            variant="contained"
            button_text="Add to cart"
          />
          <Button
            style={{
              fontSize: "12px",
              backgroundColor: "#f59e0b",
            }}
            className="md:w-[15em]"
            variant="contained"
            // href="/log-in"
            onClick={purchaseHandler}
          >
            Buy
          </Button>
          <button
            className="p-2 w-[8em] bg-slate-500 text-white rounded-md"
            onClick={purchaseHandler}
          >
            Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualMachine;
