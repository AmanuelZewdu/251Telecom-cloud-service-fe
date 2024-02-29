import "./navbar.scss";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  // const navigate = useNavigate();
  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/console", label: "Console" },
    { path: "/products", label: "Products" },
  ];
  const Link = ({ path, label, isActive }) => {
    return (
      <li key={path}>
        <a
          href={path}
          style={{
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "blue" : "black",
          }}
        >
          {label}
        </a>
      </li>
    );
  };
  return (
    <div className="">
      <nav className="relative w-full flex justify-between items-center z-20 p-2 max-w-[1500px] mx-auto bg-mainColor/50 backdrop-blur-sm shadow-xl lg:sticky lg:bg-transparent lg:backdrop-blur-none lg:shadow-none">
        <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center">
          {" "}
          {/* Container for the logo */}
          <img
            className=""
            src={require("../../shared/images/logo.png")}
            alt="Your Company Logo"
          />
        </div>
        <div className="hidden md:block w-full">
          <ul
            className="justify-end"
            style={{ listStyle: "none", display: "flex" }}
          >
            {navigationLinks.map((link) => (
              <li key={link.path} style={{ marginRight: "10px" }}>
                {" "}
                {/* <Link to={link.path} className="nav-link">
                  {link.label}
                </Link> */}
                <Link
                  key={link.path}
                  path={link.path}
                  label={link.label}
                  isActive={link.active}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="md:hidden">
            <MenuIcon onClick={handleNav} />
          </div>
          <div
            className={`fixed gap-4 bg-yellow-300 top-0
           right-0 cursor-pointer transition-transform w-full duration-500 ease-in-out text-white  
        ${navIsOpen ? "translate-y-20" : "-translate-y-full"}
        flex flex-col p-4 items-center`}
          >
            {/* <div className=" w-full flex justify-end">
              <CloseIcon onClick={() => setNavIsOpen(false)} />
            </div> */}
            <ul className="flex flex-col">
              {navigationLinks.map((link) => (
                <li key={link.path} style={{ marginRight: "10px" }}>
                  {" "}
                  {/* <Link to={link.path} className="nav-link">
                  {link.label}
                </Link> */}
                  <Link
                    key={link.path}
                    path={link.path}
                    label={link.label}
                    isActive={link.active}
                    onClick={handleNav}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
