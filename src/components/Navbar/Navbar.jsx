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
  // const navigate = useNavigate();
  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/console", label: "Console" },
    { path: "/products", label: "Products" },
  ];
  const Link = ({ path, label, isActive }) => {
    return (
      <li key={path}>
        <a className="text-white" href={path}>
          {label}
        </a>
      </li>
    );
  };
  return (
    <div className="">
      <nav
        className={`relative w-full flex justify-between items-center z-20 p-2 xl:px-[10rem] mx-auto shadow-xl bg-amber-500 ${
          scrolled ? "bg-amber-500/80 backdrop-blur-sm" : ""
        }`}
      >
        {" "}
        {/* Container for the logo */}
        <div className="w-[250px]">
          <img
            className="max-w-full"
            src={require("../../shared/images/251Logo.png")}
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
          <div className="md:hidden text-white">
            <MenuIcon onClick={handleNav} />
          </div>
          <div
            className={`slider fixed gap-4 bg-amber-500 top-0
           right-0 cursor-pointer transition-transform w-full duration-500 ease-in-out text-white  
        ${navIsOpen ? "translate-y-20" : "-translate-y-full"}
        flex flex-col p-4 items-center`}
          >
            {/* <div className=" w-full flex justify-end">
              <CloseIcon onClick={() => setNavIsOpen(false)} />
            </div> */}
            <ul className="flex flex-col gap-4 text-center">
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
