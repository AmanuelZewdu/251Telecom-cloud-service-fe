import CancelIcon from "@mui/icons-material/Cancel";

const PaymentError = () => {
  return (
    <div className="">
      <div className="min-h-svh font-Inter text-xl flex flex-col text-center items-center justify-center">
        <CancelIcon
          sx={{
            fontSize: "7em",
            color: "red",
          }}
        />
        <p className="font-medium text-light-black">
          Your payment could not be processed; please try again.
        </p>
      </div>
    </div>
  );
};

export default PaymentError;
