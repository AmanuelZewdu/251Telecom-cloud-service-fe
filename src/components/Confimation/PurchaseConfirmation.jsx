import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import vm2 from "../../shared/images/vm2.jpg";
import ethswitch_logo from "../../shared/images/ethswitch_logo.png";
import obj2 from "../../shared/images/obj2.webp";
import service from "../../Services/services";

const PurchaseConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [duration, setDuration] = useState();
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const url = new URL(window.location);
    console.log("Page URL", url);
    const totalCartItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setCartItems(totalCartItems);

    const loggedInUserString = sessionStorage.getItem("loggedIn-user");

    if (loggedInUserString) {
      const loggedInUserData = JSON.parse(loggedInUserString);

      const accessToken = loggedInUserData.access_token;

      if (accessToken) {
        setUserId(accessToken);
      } else {
        console.error("No access token or not logged in user");
      }
    } else {
      console.error("user data not found in sessionStorage.");
    }

    const durations = totalCartItems.map((item) => item.duration);
    const totalDuration = durations.reduce((acc, curr) => acc + curr, 0);
    setDuration(totalDuration);
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
  const etSwitchTotal = total * 100;

  const handleCreateOrder = async () => {
    try {
      const orderItems = cartItems.map((item) => ({
        name: item.name,
        imageId: item.imageId,
        diskSize: item.memory_mb,
        instanceType: item.instanceName,
        vCPU: item.vcpus,
        RAM: item.memory_mb,
        volume: {
          size: 20,
        },
        duration: item.duration,
      }));

      const url = new URL(window.location.href).origin + "/wait";

      const orderDetail = {
        order: {
          vm: orderItems,
          storage: [],
          object: [],
        },
        total: etSwitchTotal,
        returnUrl: url.toString(),
      };

      const response = await service.postCreateOrder(orderDetail, userId);
      if (response.order.userId) {
        setSuccessMessage(true);
        console.log("Order created:", response);
        // window.open(response.paymentURL.formUrl);
        window.location.href = response.paymentURL.formUrl;
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="flex min-h-svh p-4 pt-[8em] bg-gray-100 flex-wrap justify-center relative w-full ">
      <div className="flex h-fit max-w-[40em] flex-col gap-3 border-2 w-full rounded-md p-4 bg-white  drop-shadow-md">
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
            <h2 className="flex text-[#050505] font-poppins justify-between">
              Items: <span className="font-medium">{cartItems.length}</span>
            </h2>
            <hr />
            <h2 className="flex text-[#050505] font-poppins justify-between">
              SubTotal:{" "}
              <span className="font-medium text-right">{subtotal}</span>
            </h2>
            <hr />
            <h2 className="flex text-[#050505] font-poppins justify-between">
              <p className="flex flex-col">
                Vat:{" "}
                <span className="text-xs text-gray-500">15% of your total</span>{" "}
              </p>{" "}
              <span className="font-medium">${vat}</span>
            </h2>
            <hr />
            <h1 className="flex text-[#050505] font-poppins justify-between">
              Total: <span className="font-medium">${total}/mo</span>
            </h1>
          </div>
        )}
        <Button
          onClick={() => handleCreateOrder()}
          disabled={cartItems.length === 0}
          className="flex gap-2 h-[3.5em]"
          variant="contained"
        >
          <span>Pay with </span>
          <img src={ethswitch_logo} className="w-[10em]" alt="et switch logo" />
        </Button>
      </div>

      {successMessage && (
        <div
          onClick={() => setSuccessMessage(false)}
          className="absolute top-0 left-0 right-0 flex items-center justify-center bg-black/25 h-full"
        >
          <div className="fixed border top-[5em] border-green-500 z-50  bg-white p-3 mx-4 rounded-md shadow-md flex items-center justify-center gap-2 ">
            <CheckCircleIcon className="text-green-600" />
            <p className="text-green-600 text-sm font-medium font-poppins">
              An email confirmation has been sent to your registered email
              address. Thank you for your order!
            </p>
            <CloseIcon
              className="self-start"
              sx={{
                fontSize: "large",
                color: "green",
              }}
              onClick={() => setSuccessMessage(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PurchaseConfirmation;
