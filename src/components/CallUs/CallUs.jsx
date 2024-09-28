import "./callUs.scss";
import { useState, useEffect } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function CallUs() {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute right-[1em] flex items-center justify-center w-[2em] h-[2em] p-7 bg-button-color text-white rounded-full bottom-2 md:bottom-4 md:right-3 cursor-pointer hover:p-8 transition-all duration-500 ease-in-out ${
        shaking ? "shake" : ""
      }`}
    >
      <a href="tel:+251940793142">
        <LocalPhoneIcon sx={{ fontWeight: "bold", fontSize: 32 }} />
      </a>
    </div>
  );
}

export default CallUs;
