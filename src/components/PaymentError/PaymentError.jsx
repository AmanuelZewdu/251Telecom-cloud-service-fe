import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PaymentError = () => {
  return (
    <div className="flex items-center justify-center min-h-svh p-4">
      <div className="p-[2em] min-h-full gap-4 font-Inter flex flex-col text-left items-start justify-center border rounded-md bg-red-50 shadow-lg">
        <CancelIcon
          sx={{
            fontSize: "7em",
            color: "#DD2E2E",
            alignSelf: "center",
          }}
        />
        <h1 className="text-2xl font-medium text-red-600">Payment failed!</h1>
        <p className="text-red-600">
          Your payment could not be processed; please try again.
        </p>
        <div className=" text-red-600 items-center justify-center">
          <Link to="/products" className="flex gap-2 items-center">
            <KeyboardBackspaceIcon
              sx={{
                fontSize: "1.5em",
                color: "#DD2E2E",
              }}
            />{" "}
            <p className="hover:underline">Back to Products</p>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
