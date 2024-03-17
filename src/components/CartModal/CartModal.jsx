import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const handleRemoveItem = (indexToRemove) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("purchaseItems", JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  return (
    <div
      className={`fixed right-0 z-50 overflow-hidden ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 shadow-[0px_0px_18px_2px_#c9c9c9] h-screen`}
    >
      <div className="flex flex-col w-[20em] md:min-w-[26em] bg-white h-full p-4">
        <div className="flex mb-4 items-center justify-between">
          <h2 className="text-lg text-[#111111] font-poppins">Your Cart</h2>
          <button className="text-[#111111]" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <hr />
        <ul className="flex mt-4 flex-col gap-2">
          {cartItems.map((item, index) => (
            <li
              className="flex bg-gray-50 items-center justify-between p-2 rounded-md shadow-md"
              key={index}
            >
              <div className="flex gap-2 items-center">
                ({index + 1})
                <div>
                  <h4 className="text-xl font-montserrat ">{item.name}</h4>
                  <span className="font-light font-poppins">
                    {item.vCPUs_memory}
                  </span>
                </div>
              </div>
              <DeleteIcon
                className="cursor-pointer"
                color="error"
                onClick={() => handleRemoveItem(index)}
              />
            </li>
          ))}
        </ul>
        <div className=""></div>
      </div>
    </div>
  );
};

export default CartModal;
