// import "./navbar.scss";
// import { useEffect, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CartModal from "../CartModal/CartModal"
// const Navbar = () => {
//   const [navIsOpen, setNavIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [cartItemsCount, setCartItemsCount] = useState(0);
//    const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleCartIconClick = () => {
//       setIsModalOpen(true); // Open the modal when cart icon is clicked
//     };

//     const closeModal = () => {
//       setIsModalOpen(false); // Close the modal
//     };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("purchaseItems")) || [];
//     setCartItemsCount(cartItems.length);
//   }, []);

//   const handleNav = () => {
//     setNavIsOpen(!navIsOpen);
//   };

//   const navigationLinks = [
//     { path: "/", label: "Home" },
//     { path: "/console", label: "Console" },
//     { path: "/products", label: "Products" },
//   ];

//   const Link = ({ path, label }) => {
//     return (
//       <li className="relative nav-hover">
//         <a href={path}>{label}</a>
//       </li>
//     );
//   };

//   return (
//     <div>
//       {/* This is the black overlay */}
//       {navIsOpen && (
//         <div
//           onClick={() => setNavIsOpen(!navIsOpen)}
//           className="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"
//         ></div>
//       )}

//       <nav
//         className={`fixed w-full flex justify-between items-center z-20 p-3 xl:px-[10rem] mx-auto shadow-xl bg-amber-500 ${
//           scrolled ? "bg-amber-500/80 backdrop-blur-sm" : ""
//         }`}
//       >
//         {/* This is the logo */}
//         <div className="w-[250px]">
//           <a
//             href="/
//           "
//           >
//             <img
//               className="max-w-full"
//               src={require("../../shared/images/251Logo.png")}
//               alt="Your Company Logo"
//             />
//           </a>
//         </div>

//         {/* This is the nav that's displayed when the screen is greater than mid */}
//         <div className="hidden md:flex w-full justify-end items-center gap-4 text-white">
//           <ul className="flex justify-end gap-4" style={{ listStyle: "none" }}>
//             {navigationLinks.map((link) => (
//               <Link key={link.path} path={link.path} label={link.label} />
//             ))}
//             <span className="transition-all duration-300 ease-in-out hover:scale-110">
//               <ShoppingCartIcon className="" />
//               <span>{cartItemsCount}</span>
//             </span>
//           </ul>
//           <a className="relative nav-hover" href="/log-in">
//             Log in
//           </a>
//         </div>

//         {/* This is the nav that's displayed when the screen is less than mid */}
//         <div className="">
//           <div className="md:hidden text-white">
//             <MenuIcon sx={{ fontSize: 32 }} onClick={handleNav} />
//           </div>
//           <div
//             className={`slider fixed gap-4 bg-amber-500 top-0 right-0 cursor-pointer transition-transform w-full duration-500 ease-in-out text-white
//         ${navIsOpen ? "translate-y-20" : "-translate-y-full"}
//         flex flex-col p-4 items-center`}
//           >
//             <ul className="flex flex-col gap-4 text-center">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   path={link.path}
//                   label={link.label}
//                   onClick={handleNav}
//                 />
//               ))}
//             </ul>
//             <a href="/log-in">Log in</a>
//           </div>
//         </div>
//       </nav>
//       <CartModal open={isModalOpen} onClose={closeModal}>
//         {/* Content to populate the modal with */}
//         {/* For example, you can display the items in the cart */}
//         {/* You can also retrieve the cart items from local storage here */}
//         {/* Add your logic to display cart items */}
//       </CartModal>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartModal from "../CartModal/CartModal";

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

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setCartItemsCount(cartItems.length);
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
          <a href="/">
            <img
              className="max-w-full"
              src={require("../../shared/images/251Logo.png")}
              alt="Your Company Logo"
            />
          </a>
        </div>

        {/* This is the nav that's displayed when the screen is greater than mid */}
        <div className="hidden md:flex w-full justify-end items-center gap-4 text-white">
          <ul className="flex justify-end gap-4" style={{ listStyle: "none" }}>
            <li className="relative nav-hover">
              <a href="/">Home</a>
            </li>
            <li className="relative nav-hover">
              <a href="/console">Console</a>
            </li>
            <li className="relative nav-hover">
              <a href="/products">Products</a>
            </li>
            <li className="relative nav-hover">
              <ShoppingCartIcon
                className="cursor-pointer"
                onClick={handleCartIconClick}
              />
              <span>{cartItemsCount}</span>
            </li>
          </ul>
          <a className="relative nav-hover" href="/log-in">
            Log in
          </a>
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
              <li className="relative nav-hover">
                <a href="/">Home</a>
              </li>
              <li className="relative nav-hover">
                <a href="/console">Console</a>
              </li>
              <li className="relative nav-hover">
                <a href="/products">Products</a>
              </li>
              <li className="relative nav-hover">
                <ShoppingCartIcon
                  className="cursor-pointer"
                  onClick={handleCartIconClick}
                />
                <span>{cartItemsCount}</span>
              </li>
            </ul>
            <a href="/log-in">Log in</a>
          </div>
        </div>
      </nav>
      <CartModal open={isCartModalOpen} onClose={closeCartModal} />
    </div>
  );
};

export default Navbar;
