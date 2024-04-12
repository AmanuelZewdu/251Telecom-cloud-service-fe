import "./navbar.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartModal from "../CartModal/CartModal";
import logo from "../../shared/images/cloud251Logo.png";
const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const cartItems = JSON.parse(localStorage.getItem("purchaseItems")) || [];
  //   setCartItemsCount(cartItems.length);
  // }, []);

  useEffect(() => {
    const handleCartItemsCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("purchaseItems")) || [];
      setCartItemsCount(cartItems.length);
    };

    window.addEventListener("storage", handleCartItemsCount);

    handleCartItemsCount();

    return () => {
      window.removeEventListener("storage", handleCartItemsCount);
    };
  }, []);

  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const handleCartIconClick = () => {
    setIsCartModalOpen(true);
    setNavIsOpen(false);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      {/* This is the black overlay */}
      {navIsOpen && (
        <div
          onClick={() => setNavIsOpen(!navIsOpen)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"
        ></div>
      )}
      <nav
        className={`fixed w-full lg:w-5/6 lg:top-[2em] lg:rounded-full bg-black/5 backdrop-blur-sm flex justify-between items-center p-3 px-5 xl:px-[3rem] shadow-md z-10`}
      >
        {/* This is the logo */}
        <div className="max-w-[4em]">
          <Link to="/">
            <img className="max-w-full" src={logo} alt=" Company Logo" />
          </Link>
        </div>
        {/* This is the nav that's displayed when the screen is greater than mid */}
        <div className="hidden md:flex w-full justify-end items-center gap-4 text-[#17629d]">
          <ul
            className="flex justify-end gap-4 font-medium"
            style={{ listStyle: "none" }}
          >
            <li className="relative nav-hover">
              <Link to="/">Home</Link>
            </li>
            <li className="relative nav-hover">
              <Link to="/products">Console</Link>
            </li>
            <li className="relative nav-hover">
              <Link to="/products">Products</Link>
            </li>
            <li
              onClick={handleCartIconClick}
              className="flex relative nav-hover"
            >
              <ShoppingCartIcon className="cursor-pointer" />
              <span className="absolute -right-2 -top-2 flex items-center justify-center bg-red-600 rounded-full cursor-pointer cartCounter">
                <span className="text-[#f5f5f5]">{cartItemsCount}</span>
              </span>
            </li>
          </ul>
          <div className="flex place-content-center p-2 w-[7em] bg-button-color rounded-full cursor-pointer hover:bg-[#f5f5f5] text-[#f5f5f5] hover:text-button-color transition-all duration-300 ease-in-out hover:shadow-lg">
            <Link to="/log-in" className="relative">
              {" "}
              LOG IN
            </Link>
          </div>
        </div>

        {/* This is the nav that's displayed when the screen is less than mid */}
        <div className="">
          <div className="md:hidden text-primary-blue">
            <MenuIcon sx={{ fontSize: 32 }} onClick={handleNav} />
          </div>
          <div
            className={`slider md:hidden fixed gap-4 bg-primary-blue/90 top-0 right-0 cursor-pointer transition-transform w-full duration-500 ease-in-out text-[#f5f5f5]  
        ${navIsOpen ? "translate-y-20" : "-translate-y-full"}
        flex flex-col p-4 items-center`}
          >
            <ul className="flex flex-col gap-4 text-center">
              <li className="relative nav-hover">
                <Link onClick={() => handleNav()} to="/">
                  Home
                </Link>
              </li>
              <li className="relative nav-hover">
                <Link onClick={() => handleNav()} to="/products">
                  Console
                </Link>
              </li>
              <li className="relative nav-hover">
                <Link onClick={() => handleNav()} to="/products">
                  Products
                </Link>
              </li>
              <li
                onClick={handleCartIconClick}
                className="flex relative nav-hover items-center w-fit m-auto justify-center cursor-pointer"
              >
                <ShoppingCartIcon className="cursor-pointer" />
                <span className="absolute -right-2 -top-2 flex items-center justify-center bg-red-600 rounded-full cartCounter">
                  <span className="text[#f5f5f5]">{cartItemsCount}</span>
                </span>
              </li>
            </ul>
            <Link onClick={() => handleNav()} to="/log-in" className="relative">
              {" "}
              LOG IN
            </Link>
          </div>
        </div>
      </nav>
      <CartModal open={isCartModalOpen} onClose={closeCartModal} />
    </div>
  );
};

export default Navbar;
