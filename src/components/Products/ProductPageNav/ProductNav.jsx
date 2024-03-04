import "./productNav.scss";
import { useState } from "react";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";

const ProductNav = ({ onSelectComponent }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const links = [
    { name: "Virtual machine", component: "VirtualMachine" },
    { name: "Object storage", component: "ObjectStorage" },
    { name: "Array storage", component: "ArrayStorage" },
  ];

  const handleComponentClick = (componentName, index) => {
    onSelectComponent(componentName);
    setActiveLink(index);
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
        <ul className="flex flex-col items-start gap-5">
          {links.map((link, index) => (
            <li
              className={`relative cursor-pointer border-b-2 border-transparent text-xl ${
                index === activeLink ? "active-link" : ""
              }`}
              key={index}
              onClick={() => handleComponentClick(link.component, index)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      {/* This is the icon that toggles the sidebar */}
      <div
        className={`fixed px-2 py-5 h-screen md:hidden text-gray-600 ${
          navIsOpen ? "hidden" : "inline"
        } `}
      >
        {/* <ListIcon sx={{ fontSize: 42 }} onClick={() => setNavIsOpen(true)} /> */}
        <div className="border-2 border-gray-600 p-1 rounded-md">
          <NotesOutlinedIcon
            sx={{ fontSize: 38 }}
            onClick={() => setNavIsOpen(true)}
          />
        </div>
      </div>

      {/* This is the nav that's displayed when the screen is greater than mid */}
      <div className="relative hidden md:flex w-[12em] justify-center border h-screen shadow-lg pt-4  ">
        <ul className="relative flex flex-col items-start gap-4">
          {links.map((link, index) => (
            <li
              className={`relative cursor-pointer border-b-2 border-transparent text-xl hoverEff ${
                index === activeLink ? "active-link" : ""
              }`}
              key={index}
              onClick={() => {
                onSelectComponent(link.component);
                setActiveLink(index);
              }}
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
