import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import vm2 from "../../shared/images/vm2.jpg";
import ethswitch_logo from "../../shared/images/ethswitch_logo.png";
import obj2 from "../../shared/images/obj2.webp";
import service from "../../Services/services";

const PurchaseConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const totalCartItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setCartItems(totalCartItems);

    const loggedInUserString = sessionStorage.getItem("loggedIn-user");

    if (loggedInUserString) {
      const loggedInUserData = JSON.parse(loggedInUserString);

      const accessToken = loggedInUserData.access_token;

      if (accessToken) {
        setUserId(accessToken);
        console.log(accessToken);
      } else {
        console.error("No access token or not logged in user");
      }
    } else {
      console.error("user data not found in sessionStorage.");
    }
  }, []);

  const removeItem = (indexToRemove) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("purchaseItems", JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event("storage"));
  };

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

  // const handleCreateOrder = async () => {
  //   try {
  //     const orderDetail = {
  //       cartItems,
  //       subtotal: calculateSubtotal(),
  //       vat: vatCalculator(calculateTotal()),
  //       total: total,
  //     };

  //     console.log(orderDetail);
  //     const response = await service.postCreateOrder(orderDetail, userId);

  //     console.log("Order created:", response);
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //   }
  // };

  const handleCreateOrder = async () => {
    try {
      const orderItems = cartItems.map((item) => ({
        name: item.name,
        "image-id": item.imageId,
        "disk-size": item.memory_mb,
        "instance-type": item.instanceName,
      }));
      console.log(orderItems.memory_mb);
      const orderDetail = {
        duration: 5,
        order: {
          vm: orderItems,
          storage: [],
          object: [],
        },
        total: total,
      };

      console.log(orderDetail);
      const response = await service.postCreateOrder(orderDetail, userId);

      console.log("Order created:", response);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="flex bg-gray-100 h-full top-[5em]  flex-wrap justify-center relative p-4 w-full">
      <div className="grow max-w-[45em] flex items-center justify-center p-2">
        <div className="flex flex-col gap-3 border-2 w-full rounded-md p-4 bg-white drop-shadow-md">
          <div className="flex items-center gap-2">
            {" "}
            <ShoppingCartIcon />{" "}
            <h2 className="text-2xl md:text-xl">Cart summary</h2>
          </div>
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
                    <span className="font-poppins font-medium">
                      {cartItem.name}
                      {cartItem.objName}
                    </span>
                    <span className="font-light text-sm font-poppins">
                      {cartItem.vcpus ? `${cartItem.vcpus} vCPU | ` : ""}
                      {cartItem.memory_mb ? `${cartItem.memory_mb}` : ""}
                      {cartItem?.diskType}
                    </span>
                    <span className="font-light text-sm">Qty: 1</span>
                  </div>
                </div>
                <span
                  onClick={() => removeItem(index)}
                  className="text-red-500 cursor-pointer"
                >
                  Remove
                </span>
              </li>
            ))}
          </ul>
          {cartItems.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="flex text-gray-900 font-poppins justify-between">
                Items: <span className="font-medium">{cartItems.length}</span>
              </h2>
              <h2 className="flex text-gray-900 font-poppins justify-between">
                SubTotal:{" "}
                <span className="font-medium text-right">{subtotal}</span>
              </h2>
              <h2 className="flex text-gray-900 font-poppins justify-between">
                Vat: <span className="font-medium">{vat}</span>
              </h2>
              <h1 className="flex text-gray-900 font-poppins justify-between">
                Total: <span className="font-medium">${total}/mo</span>
              </h1>
            </div>
          )}
          <Button
            onClick={() => handleCreateOrder()}
            sx={{}}
            className="flex gap-2 h-[3.5em]"
            variant="contained"
          >
            <span>Pay with </span>
            <img
              src={ethswitch_logo}
              className="w-[10em]"
              alt="et switch logo"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PurchaseConfirmation;
