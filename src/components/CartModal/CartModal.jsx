import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CartModal = ({ open, onClose }) => {
  const cartItems = JSON.parse(localStorage.getItem("purchaseItems")) || [];

  return (
    <div
      className={`fixed right-0 z-50 overflow-hidden ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500`}
    >
      <div className="flex flex-col min-w-[20em] bg-gray-500 h-screen p-4 gap-8">
        <div className="flex items-center bg-red-300 justify-between">
          <h2 className="text-lg font-semibold ">Your Cart</h2>
          <button className="text-white" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
