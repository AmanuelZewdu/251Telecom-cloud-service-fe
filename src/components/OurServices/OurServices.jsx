import "./services.scss";
import { services } from "../../shared/data/data.js";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="txt flex flex-col text-center p-2 gap-6 my-16">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-Inter font-semibold text-primary-blue">
            Our{" "}
            <span className="relative text-button-color line">services</span>{" "}
          </h1>
          <p className="text-primary-blue text-lg font-DMSans">
            Here are services we are offering{" "}
          </p>
        </div>
        <div className="w-full p-3 flex items-stretch justify-center flex-wrap gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg flex flex-col items-center justify-between max-w-[22em] 
              transition-all duration-500 ease-in-out
            hover:border-gray-300 shadow-md
              hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
              hover:scale-105 overflow-hidden 
              "
            >
              <div className="w-full max-h-[15em] overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                  src={service.image}
                  alt="service"
                />
              </div>
              <div className="bgCircle z-30 card-center  font-DMSans relative text-left gap-4 flex flex-col p-4">
                <h2 className="text-2xl text-primary-blue font-medium xl:text-xl border-b border-primary-blue w-fit ">
                  {service.serviceName}
                </h2>
                <div
                  className="
                   tracking-wide text-black/80 leading-normal text-sm font-Inter
                "
                >
                  {service.description}
                </div>
                <div className="">
                  <Link to={service.path}>
                    <Button
                      variant="outlined"
                      className="w-full "
                      sx={{
                        borderColor: "#BC68B2",
                        color: "#BC68B2",
                        fontWeight: "semibold",
                        "&:hover": {
                          borderColor: "transparent",
                          backgroundColor: "#BC68B2",
                          color: "#fff",
                        },
                      }}
                    >
                      {" "}
                      Purchase
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
