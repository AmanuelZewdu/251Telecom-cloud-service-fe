import "./cartModal.scss";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const CartModal = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div
      className={`fixed right-0 z-50  ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 shadow-[0px_0px_18px_2px_#c9c9c9] h-screen`}
    >
      <div className="cartModal flex flex-col w-[20em] md:min-w-[26em] bg-white h-full p-4 gap-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-[#111111] font-poppins">Your Cart</h2>
          <button className="text-[#111111]" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <hr />
        {cartItems.length > 0 ? (
          <>
            <ul className="flex mt-4 flex-col gap-2 ">
              {cartItems.map((item, index) => (
                <li
                  className="flex bg-gray-50 items-center justify-between p-2 rounded-md shadow-md"
                  key={index}
                >
                  <div className="flex gap-2 items-center">
                    ({index + 1})
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-montserrat ">{item.name}</h4>
                      <span className="font-light font-poppins">
                        {item.vcpus ? `${item.vcpus} vCPU | ` : ""}
                        {item.memory_mb ? `${item.memory_mb}` : ""}
                      </span>
                      <span className="font-medium  font-poppins">Qty: 1</span>
                      <h2 className="font-light font-poppins">
                        Price:{" "}
                        <span className="font-medium text-sm font-poppins">
                          {item.price}
                        </span>
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
              <div className="flex flex-col gap-2">
                <h2 className="font-poppins">
                  Items: <span className="font-medium">{cartItems.length}</span>
                </h2>
                <h2 className="font-poppins">
                  SubTotal:{" "}
                  <span className="font-medium">
                    $2500/mo + $2500/mo = $5000/mo
                  </span>
                </h2>
                <h1 className="font-poppins">
                  Total: <span className="font-medium">$5000/mo</span>
                </h1>
              </div>
            )}
            {cartItems.length > 0 && (
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f59e0b",
                  padding: "0.5em",
                  color: "#fff",
                }}
              >
                <a href="/checkout">Proceed to checkout</a>
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
