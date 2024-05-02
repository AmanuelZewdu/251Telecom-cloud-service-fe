import Lottie from "react-lottie";
import * as animationData from "../../../shared/webDev.json";

const ArrayStorage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-8 flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-Inter font-bold text-primary-blue">
          Under Development
        </h1>
        <h3 className="text-xl font-bold text-gray-300">Coming Soon</h3>
      </div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default ArrayStorage;
