import "./cartModal.scss";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, useNavigate } from "react-router-dom";

const CartModal = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCartItems =
        JSON.parse(localStorage.getItem("purchaseItems")) || [];
      setCartItems(updatedCartItems);
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }

  //   return () => document.body.classList.remove("overflow-hidden");
  // });

  const handleRemoveItem = (indexToRemove) => {
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

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  function redirectHandler() {
    const isUserLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn-user"));
    if (isUserLoggedIn) {
      navigate("/purchase-confirm");
    } else {
      navigate("/log-in");
    }
    onClose();
  }

  return (
    <div
      className={`fixed right-0 z-50 font-Inter  ${
        open
          ? "translate-x-0 shadow-[0px_0px_18px_2px_#c9c9c9]"
          : "translate-x-full"
      } transition-transform duration-500 h-screen`}
    >
      <div className="cartModal flex flex-col w-[20em] md:min-w-[26em] bg-white h-full p-4 gap-4 overflow-y-auto">
        <div className="flex items-center font-medium text-primary-blue justify-between">
          <h2 className="text-2xl font-medium">Your Cart</h2>
          <button className="" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <hr />
        {cartItems.length > 0 ? (
          <>
            <ul className="flex mt-4 flex-col gap-2">
              {cartItems.map((item, index) => (
                <li
                  className="relative flex bg-gray-50 items-center justify-between p-2 rounded-md shadow-md"
                  key={index}
                >
                  <span className="absolute top-2 right-3 text-sm font text-gray-300">
                    {item.serviceType}
                  </span>
                  <div className="flex gap-2 items-center">
                    ({index + 1})
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-medium text-light-black">
                        {item.name}
                        {item?.objName}
                      </h4>
                      <span className="tracking-wide text-sm font-medium text-gray-400">
                        {item.vcpus ? `${item.vcpus} vCPU | ` : ""}
                        {item.memory_mb ? `${item.memory_mb}` : ""}
                        {item?.diskType}
                      </span>
                      <span className="tracking-wide text-sm font-medium text-gray-400">
                        {item.volume.size
                          ? `${item.volume.size} GB volume`
                          : ""}
                      </span>
                      <h2 className="text-sm tracking-wide font-medium text-gray-400">
                        Price:{" "}
                        <span className="text-light-black">{item.price}</span>
                      </h2>
                    </div>
                  </div>
                  <DeleteIcon
                    className="cursor-pointer"
                    color="error"
                    onClick={() => handleRemoveItem(index)}
                  />
                </li>
              ))}
            </ul>{" "}
            {cartItems.length > 0 && (
              <ul className="flex font-DMSans flex-col text-slate-800 gap-2">
                <li>
                  Items: <span className="font-medium">{cartItems.length}</span>
                </li>
                <hr />
                <li>
                  SubTotal: <span className="font-medium">{subtotal}</span>
                </li>
                <hr />
                <li>
                  Total:{" "}
                  <span className="font-semibold text-green-700">
                    ETB {total}/mo
                  </span>{" "}
                  <span className="text-xs text-gray-500">(including VAT)</span>
                </li>
              </ul>
            )}
            {cartItems.length > 0 && (
              <Button
                variant="contained"
                className="flex items-center justify-center gap-2 hover:bg-green-400"
                style={{
                  backgroundColor: "#BC68B2",
                  padding: "0.5em",
                  color: "#fff",
                }}
                onClick={() => redirectHandler()}
              >
                Proceed to checkout <ArrowRightAltIcon />
              </Button>
            )}
          </>
        ) : (
          <p className="text-black/50 text-xl font-light">
            Your cart it empty{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
