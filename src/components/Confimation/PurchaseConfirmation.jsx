import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import vm2 from "../../shared/images/vm2.jpg";
import ethswitch_logo from "../../shared/images/ethswitch_logo.png";
import obj2 from "../../shared/images/obj2.webp";
const PurchaseConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const totalCartItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setCartItems(totalCartItems);
  }, []);

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price?.replace(/[^\d.]/g, ""));
      return total + price;
    }, 0);

    const additionRepresentation = cartItems.map((item, index) => {
      return index === cartItems.length - 1
        ? `$${parseFloat(item.price?.replace(/[^\d.]/g, ""))}`
        : `$${parseFloat(item.price?.replace(/[^\d.]/g, ""))} + `;
    });

    return `${additionRepresentation.join(" ")} = $${subtotal.toFixed(2)}`;
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price?.replace(/[^\d.]/g, ""));
      return acc + price;
    }, 0);
    return total.toFixed(2);
  };

  const vatCalculator = (total) => {
    const vat = (total * 15) / 100;
    return vat;
  };

  const subtotal = calculateSubtotal();
  const totalBeforeVat = calculateTotal();
  const vat = vatCalculator(totalBeforeVat);
  const total = parseFloat(vat) + parseFloat(totalBeforeVat);

  return (
    <div className="flex bg-gray-100 top-[5em] flex-wrap justify-center relative p-4 w-full">
      <div className="grow max-w-[40em] flex items-center justify-center p-2">
        <div className="flex flex-col gap-3 border-2 w-full rounded-md p-4 bg-white drop-shadow-md">
          <h2 className="text-xl">Cart summary</h2>
          <hr />
          <ul className="flex flex-col gap-4">
            {cartItems.map((cartItem, index) => (
              <li
                key={index}
                className="relative flex items-end justify-between gap-2 border-b p-4"
              >
                <span className="absolute top-2 right-3 text-sm font text-gray-300">
                  {cartItem.serviceType}
                </span>
                <div className="flex gap-2">
                  <span>({index + 1})</span>
                  {cartItem.vcpus ? (
                    <div className="hidden md:flex md:w-[6em]">
                      <img className="w-full rounded-md" src={vm2} alt="" />
                    </div>
                  ) : (
                    <div className="hidden md:flex md:w-[6em]">
                      <img className="w-full rounded-md" src={obj2} alt="" />
                    </div>
                  )}

                  <div className="flex flex-col  text-lg">
                    <span className="font-poppins">
                      {cartItem.name}
                      {cartItem.objName}
                    </span>
                    <span className="font-light font-poppins">
                      {cartItem.vcpus ? `${cartItem.vcpus} vCPU | ` : ""}
                      {cartItem.memory_mb ? `${cartItem.memory_mb}` : ""}
                      {cartItem?.diskType}
                    </span>
                    <span className="font-light">Qty: 1</span>
                  </div>
                </div>
                <span className="text-red-500 cursor-pointer">Remove</span>
              </li>
            ))}
          </ul>
          {cartItems.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="flex text-gray-900 font-poppins justify-between">
                Items: <span className="font-medium">{cartItems.length}</span>
              </h2>
              <h2 className="flex text-gray-900 font-poppins justify-between">
                SubTotal: <span className="font-medium">{subtotal}</span>
              </h2>
              <h2 className="flex text-gray-900 font-poppins justify-between">
                Vat: <span className="font-medium">{vat}</span>
              </h2>
              <h1 className="flex text-gray-900 font-poppins justify-between">
                Total: <span className="font-medium">${total}/mo</span>
              </h1>
            </div>
          )}
          <Button sx={{}} className="flex gap-2 h-[3.5em]" variant="contained">
            {" "}
            <span>Pay with </span>
            <img
              src={ethswitch_logo}
              className="w-[10em]"
              alt="et switch logo"
            />
          </Button>
        </div>
      </div>
      {/* <div className="grow flex items-center justify-center p-2">
        <div className="flex flex-col gap-3 border-2 w-full rounded-md p-4 bg-white drop-shadow-md">
        <h2 className="text-xl">Cart summary</h2>
        <hr />
        <ul>
            {cartItems.map((cartItem, index) => (
            <React.Fragment key={index}>
                <li className="flex items-center justify-between gap-2">
                <div className="flex gap-2">
                    <span>({index + 1})</span>
                    <div className="flex flex-col font-medium text-lg">
                    <span>
                        {cartItem.name}
                        {cartItem.objName}
                    </span>
                    <span className="font-light font-poppins">
                        {cartItem.vcpus ? `${cartItem.vcpus} vCPU | ` : ""}
                        {cartItem.memory_mb ? `${cartItem.memory_mb}` : ""}
                        {cartItem?.diskType}
                    </span>
                    <span className="font-light">Qty: 1</span>
                    </div>
                </div>
                <span className="text-red-500">Remove</span>
                </li>
                {index !== cartItems.length - 1 && (
                <hr className="m-2 border-gray-400 w-full" />
                )}
            </React.Fragment>
            ))}
        </ul>
        </div>
    </div> */}
    </div>
  );
};
export default PurchaseConfirmation;
