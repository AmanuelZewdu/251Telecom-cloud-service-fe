import { useState } from "react";
import ListIcon from "@mui/icons-material/List";

const ProductNav = ({ onSelectComponent }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const links = [
    { name: "Test", component: "Test" },
    { name: "Test2", component: "Test2" },
    // { name: "Virtual machine", component: "VirtualMachine" },
    // { name: "Object storage", component: "ObjectStorage" },
    // { name: "Array storage", component: "ArrayStorage" },
  ];

  const handleComponentClick = (componentName) => {
    onSelectComponent(componentName);
    handleNav();
  };

  return (
    <div className="">
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(handleNav)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 "
        ></div>
      )}

      <div
        className={`absolute h-screen w-1/2 flex justify-center pt-[2em] text-center bg-white z-10 transition-all duration-500 ease-in-out ${
          navIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
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

      <div
        className={`fixed p-2 h-screen md:hidden ${
          navIsOpen ? "hidden" : "inline"
        } `}
      >
        <ListIcon sx={{ fontSize: 42 }} onClick={() => setNavIsOpen(true)} />
      </div>

      <div className="hidden md:block w-[12em] border h-screen shadow-lg pt-4">
        <ul className="flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <li key={index} onClick={() => onSelectComponent(link.component)}>
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductNav;
