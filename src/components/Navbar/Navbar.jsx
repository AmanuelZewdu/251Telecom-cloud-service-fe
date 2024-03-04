import "./navbar.scss";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/console", label: "Console" },
    { path: "/products", label: "Products" },
  ];

  const Link = ({ path, label }) => {
    return (
      <li>
        <a className="text-white" href={path}>
          {label}
        </a>
      </li>
    );
  };

  return (
    <div>
      {/* This is the black overlay */}
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(!navIsOpen)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"
        ></div>
      )}

      <nav
        className={`fixed w-full flex justify-between items-center z-20 p-3 xl:px-[10rem] mx-auto shadow-xl bg-amber-500 ${
          scrolled ? "bg-amber-500/80 backdrop-blur-sm" : ""
        }`}
      >
        {/* This is the logo */}
        <div className="w-[250px]">
          <img
            className="max-w-full"
            src={require("../../shared/images/251Logo.png")}
            alt="Your Company Logo"
          />
        </div>

        {/* This is the nav that's displayed when the screen is greater than mid */}
        <div className="hidden md:block w-full">
          <ul className="flex justify-end gap-4" style={{ listStyle: "none" }}>
            {navigationLinks.map((link) => (
              <Link key={link.path} path={link.path} label={link.label} />
            ))}
          </ul>
        </div>

        {/* This is the nav that's displayed when the screen is less than mid */}
        <div className="">
          <div className="md:hidden text-white">
            <MenuIcon sx={{ fontSize: 32 }} onClick={handleNav} />
          </div>
          <div
            className={`slider fixed gap-4 bg-amber-500 top-0 right-0 cursor-pointer transition-transform w-full duration-500 ease-in-out text-white  
        ${navIsOpen ? "translate-y-20" : "-translate-y-full"}
        flex flex-col p-4 items-center`}
          >
            <ul className="flex flex-col gap-4 text-center">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  path={link.path}
                  label={link.label}
                  onClick={handleNav}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
