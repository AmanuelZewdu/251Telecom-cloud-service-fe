import "./productNav.scss";
import { useState, useEffect } from "react";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import logo from "../../../shared/images/cloud251Logo.png";
import StorageIcon from "@mui/icons-material/Storage";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
const ProductNav = ({ onSelectComponent }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      icon: <StorageIcon />,
      name: "Virtual machine",
      component: "VirtualMachine",
    },
    {
      icon: <PermMediaIcon />,
      name: "Object storage",
      component: "ObjectStorage",
    },
    {
      icon: <FolderCopyIcon />,
      name: "Array storage",
      component: "ArrayStorage",
    },
  ];

  const handleComponentClick = (componentName, index) => {
    onSelectComponent(componentName);
    setActiveLink(index);
    handleNav();
  };

  return (
    <div className="h-full">
      {/* This is the black overlay */}
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(handleNav)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"
        ></div>
      )}

      {/* This is the nav that's displayed when the screen is less than mid */}
      <div
        className={`fixed top-0 h-screen w-3/5 flex flex-col gap-4 pt-[2em] items-center text-center bg-white z-10 transition-all duration-500 ease-in-out px-2 ${
          navIsOpen ? "translate-x-0" : "-translate-x-full"
        } font-montserrat`}
      >
        <div className="max-w-[5em] mx-auto flex place-items-center">
          <img className="w-full" src={logo} alt="" />
        </div>
        <hr className="border-primary-blue w-full" />
        <ul className="flex flex-col items-start gap-5">
          {links.map((link, index) => (
            <li
              className={`relative flex items-center justify-between gap-2 text-[#343434] cursor-pointer border-b-2 border-transparent text-xl ${
                index === activeLink ? "active-link" : ""
              }`}
              key={index}
              onClick={() => handleComponentClick(link.component, index)}
            >
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* This is the icon that toggles the sidebar */}

      <div
        className={`fixed top-[5em] mx-2 my-5  md:hidden text-gray-600 border border-gray-600 p-1 rounded-md ${
          scrolled ? "hidden" : ""
        }`}
      >
        <NotesOutlinedIcon
          sx={{ fontSize: 38 }}
          onClick={() => setNavIsOpen(true)}
        />
      </div>

      {/* This is the nav that's displayed when the screen is greater than mid */}
      <div
        className="relative hidden md:flex 
       w-[12em] border justify-center h-full shadow-lg pt-4 font-montserrat"
      >
        <ul className="relative flex flex-col items-start gap-4">
          {links.map((link, index) => (
            <li
              className={`relative flex gap-2 items-center justify-between cursor-pointer border-b-2 border-transparent text-[#343434] text-lg ${
                index === activeLink ? "active-link" : ""
              }`}
              key={index}
              onClick={() => {
                onSelectComponent(link.component);
                setActiveLink(index);
              }}
            >
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductNav;
