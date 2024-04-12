import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircularProgress from "@mui/material/CircularProgress";
import "./waitPage.scss";
import services from "../../Services/services";
import { orderStatus } from "../../shared/enums/orderStatus";
const WaitPage = () => {
  // Define an array of messages
  const messages = [
    "We're setting up your virtual machine. This may take a few moments, so sit tight!",
    "Your virtual machine is currently being provisioned. Please wait a moment longer.",
    "Our servers are hard at work creating your virtual environment. Hang in there!",
    "We expect your virtual machine to be ready shortly. Stay tuned!",
  ];
  const [fetchError, setFetchError] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const [showCheckMarks, setShowCheckMarks] = useState(
    new Array(messages.length).fill(false)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageIndex((prevIndex) =>
        prevIndex < messages.length - 1 ? prevIndex + 1 : prevIndex
      );

      setTimeout(() => {
        setShowCheckMarks((prev) =>
          prev.map((value, index) => (index === messageIndex ? true : value))
        );
      }, 5000);
    }, 8000);
    return () => clearTimeout(timer);
  }, [messageIndex, messages.length]);

  useEffect(() => {
    const id = getIdFromUrl();

    getOrderById(id);
  });

  const getIdFromUrl = () => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const id = searchParams.get("orderId");
    return id;
  };

  const getOrderById = async (orderId) => {
    try {
      console.log("Id", orderId);
      const response = await services.getOrderById(orderId);

      console.log("Order===", response);
    } catch (error) {
      setFetchError(true);
    } finally {
    }
  };
  return (
    <div className="h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="relative flex flex-col md:flex-row items-center gap-8 justify-center -mt-[5em]">
        <div className="waitLoader mr-4"></div>
        <ul className="flex flex-col gap-4 items-start">
          {messages.map((message, index) => (
            <li
              className="flex gap-3 items-center"
              key={index}
              style={{ display: index <= messageIndex ? "flex" : "none" }}
            >
              {showCheckMarks[index] ? (
                <CheckCircleIcon className="text-green-600" />
              ) : (
                <div>
                  <CircularProgress
                    className="text-green-600"
                    size={24}
                    thickness={4}
                  />
                </div>
              )}
              <span className="font-poppins text-sm xl:text-xl text-gray-600">
                {message}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WaitPage;
