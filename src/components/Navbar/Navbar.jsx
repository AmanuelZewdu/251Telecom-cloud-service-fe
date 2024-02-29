import React from "react";

import "./navbar.scss";

const Navbar = () => {
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
    <div>
      <nav className="container">
        <div className="logo-container">
          {" "}
          {/* Container for the logo */}
          <img
            src={require("../../shared/images/251logo.png")}
            alt="Your Company Logo"
          />
        </div>
        <div className="menu">
          <ul
            className="nav-list"
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
      </nav>
    </div>
  );
};
export default Navbar;
