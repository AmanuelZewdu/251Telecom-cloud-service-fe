import { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";

const ProductNav = ({ onSelectComponent }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const links = [
    { name: "Virtual machine", component: "VirtualMachine" },
    { name: "Object storage", component: "ObjectStorage" },
    { name: "Array storage", component: "ArrayStorage" },
  ];

  const handleComponentClick = (componentName) => {
    onSelectComponent(componentName);
    handleNav();
  };

  return (
    <div className="">
      {/* This is the black overlay */}
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(handleNav)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 "
        ></div>
      )}

      {/* This is the nav that's displayed when the screen is less than mid */}
      <div
        className={`fixed h-screen w-1/2 flex justify-center pt-[2em] text-center bg-white z-10 transition-all duration-500 ease-in-out ${
          navIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start gap-3">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => handleComponentClick(link.component)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      {/* This is the icon that toggles the sidebar */}
      <div
        className={`fixed px-4 py-6 h-screen md:hidden text-gray-700 ${
          navIsOpen ? "hidden" : "inline"
        } `}
      >
        {/* <ListIcon sx={{ fontSize: 42 }} onClick={() => setNavIsOpen(true)} /> */}
        <NotesOutlinedIcon
          sx={{ fontSize: 38 }}
          onClick={() => setNavIsOpen(true)}
        />
      </div>

      {/* This is the nav that's displayed when the screen is greater than mid */}
      <div className="relative hidden md:flex w-[12em] justify-center border h-screen shadow-lg pt-4  ">
        <ul className="flex flex-col items-start gap-3">
          {links.map((link, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => onSelectComponent(link.component)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductNav;
