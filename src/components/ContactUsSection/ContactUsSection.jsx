import "./contactUsSection.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ContactUsSection = () => {
  const lists = [
    { id: 0, text: "Load balancing capabilities" },
    { id: 1, text: "Auto-Scaler access" },
    { id: 2, text: "And something koy" },
  ];

  const CTA = styled(Button)({
    fontFamily: "Inter",
  });

  return (
    <div className="w-full font-Inter flex flex-col items-center justify-center bg gap-8 p-4 py-12 ">
      <div className="flex flex-col gap-5 xl:gap-2 xl:flex-row xl:max-w-[70em] ">
        <div className="flex flex-col font-bold gap-2 text-3xl xl:text-4xl bg-gradient-to-br from-primary-blue to-secondary-blue text-transparent bg-clip-text text-center xl:text-left">
          <span>Do you have any questions?</span>
          <span className="">Please don't hesitate and reach out to us</span>
        </div>
        <div className="flex flex-col gap-4 max-w-[40em] text-center xl:text-left mx-auto xl:ml-[5em]">
          <h2 className="text-gray-600 text-xl">
            For businesses seeking advanced cloud capabilities tailored to your
            enterprise needs, we offer special services. Contact us and we will
            reach out to you.
          </h2>
          <ul className="text-gray-500 flex flex-col gap-2  w-fit xl:w-full mx-auto items-start ">
            {lists.map((list) => (
              <li
                key={list.id}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircleIcon
                  color="primary"
                  sx={{
                    fontSize: "16px",
                  }}
                />
                {list.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/contactUs">
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
          className="shadow-lg"
        >
          Contact Us
        </CTA>
      </Link>
    </div>
  );
};
export default ContactUsSection;
