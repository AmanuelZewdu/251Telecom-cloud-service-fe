import "./contactUsSection.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const ContactUsSection = () => {
  const CTA = styled(Button)({
    textTransform: "none",
    fontSize: "1em",
    fontWeight: "semi-bold",
  });

  return (
    <div className="h-[15em] lg:h-[20em] w-full flex flex-col items-center justify-center bg font-montserrat font-semibold gap-4 xl:gap-6 p-4">
      <p className="text-2xl xl:text-4xl max-w-[30em] text-center bg-gradient-to-r from-primary-blue to-secondary-blue text-transparent bg-clip-text">
        Do you have any questions? Want to talk to us? Please don't hesitate and
        reachout to us
      </p>
      <CTA
        variant="outlined"
        sx={{
          borderColor: "#BC68B2",
          outlineColor: "none",
          color: "#BC68B2",
          "&:hover": {
            backgroundColor: "#BC68B2",
            color: "#fff",
            outlineColor: "transparent",
            borderColor: "transparent",
          },
        }}
        className="shadow-xl"
      >
        Contact Us
      </CTA>
    </div>
  );
};
export default ContactUsSection;
