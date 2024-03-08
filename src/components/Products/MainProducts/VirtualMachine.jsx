import "./mainProducts.scss";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { memories, vCPUs } from "../../../shared/data/data.js";
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
import FormLabel from "@mui/material/FormLabel";

function createData(name, vCPUS_memory) {
  return { name, vCPUS_memory };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("air", 262, 16.0, 24, 6.0),
  createData("Cake", 305, 3.7, 67, 4.3),
  createData("Gingerbre", 356, 16.0, 49, 3.9),
  createData("Eair", 262, 16.0, 24, 6.0),
  createData("upcake", 305, 3.7, 67, 4.3),
  createData("ngerbread", 356, 16.0, 49, 3.9),
  createData("Ecir", 262, 16.0, 24, 6.0),
  createData("Cupke", 305, 3.7, 67, 4.3),
  createData("Gingbread", 356, 16.0, 49, 3.9),
];

const VirtualMachine = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState("");

  // Selecting table row function starts here
  const handleCheckboxClick = (name, row) => {
    setSelectedRow(row);
    console.log(selectedRow);
  };

  const selectedRowIndex = selectedRow !== null ? selectedRow : -1;
  const selectedRowData =
    selectedRowIndex !== -1 ? rows[selectedRowIndex] : null;

  let selectedRowJSON = null;

  if (selectedRowData) {
    selectedRowJSON = {
      name: selectedRowData.name,
      vCPUS_memory: selectedRowData.vCPUS_memory,
    };
  }

  // Selecting table row function ends here

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

  // Radio ends

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
    console.log("clicked");
  };

  const reduceQuanntity = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setQuantity(newValue);
    }
  };

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className="h-screen w-full pt-6 text-center flex flex-col gap-4 p-2 md:text-left">
      <h1 className="text-2xl">Virtual Machine</h1>
      <details className="open:bg-white dark:open:bg-gray-100 p-2 open:shadow-lg  rounded-md">
        <summary className="text-sm leading-6 text-slate-900 select-none">
          What is VM?
        </summary>
        <p className="mt-3 text-sm leading-6 text-slate-900">
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
                  <TableCell align="left">vCPUS_memory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={selectedRow === index}
                        onChange={() => handleCheckboxClick(row.name, index)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.vCPUS_memory}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="border shadow-md flex text-left flex-col p-2 gap-2">
          <div className="mt-4 flex flex-col w-ful">
            <h4 className="text-lg font-semibold font-montserrat">
              Image Management
            </h4>
            <div className="flex gap-2 items-center ">
              <h4>Image:</h4>
              <RadioGroup row name="use-radio-group" defaultValue="windows">
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
          <h4 className="text-lg font-semibold font-montserrat">Quantity</h4>
          <div className="w-full border flex items-center justify-between rounded-md overflow-hidden md:w-[15em]">
            <div
              onClick={reduceQuanntity}
              className="p-1 bg-gray-200 cursor-pointer"
            >
              <RemoveIcon className="text-gray-500" />
            </div>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="text-center outline-none  w-full md:w-[10em]"
            />
            <div className="p-1 bg-gray-200 cursor-pointer">
              <AddIcon className="text-gray-500" onClick={addQuantity} />
            </div>
          </div>
          <div className="mt-4 flex gap-4 items-center">
            <div className="flex gap-2">
              <label>Duration:</label>

              <select
                name="duration"
                className="w-[8em] p-2 bg-gray-100 rounded-md"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={duration}
                onChange={handleChange}
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
