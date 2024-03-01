import "./services.scss";
import { services } from "../../shared/data/data.js";
import { Button } from "@mui/material";
const Services = () => {
  return (
    <div>
      <div className="txt flex flex-col  text-center p-2 gap-6 my-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-montserrat">
            Our{" "}
            <span className="relative text-primary-light line">services</span>{" "}
          </h1>
          <p className="font-light">Here are service we are offering </p>
        </div>
        <div className="w-full p-3 flex items-center justify-center flex-wrap gap-8">
          {services.map((service) => (
            <a
              href={service.path}
              key={service.id}
              className="border border-gray-200 rounded-lg flex flex-col items-center justify-between p-2 max-w-[20em] 
              transition-all duration-500 ease-in-out
              shadow-lg
              hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
              hover:scale-105  
              "
            >
              <div className="w-[10em]">
                <img
                  className="mix-blend-color-burn"
                  src={service.image}
                  alt="service"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-montserrat">
                  {service.serviceName}
                </h2>
                <div
                  className="font-light
                "
                >
                  {service.description}
                </div>
                <div>
                  <Button
                    variant="outlined"
                    className="w-full"
                    sx={{
                      borderColor: "#f59e0b",
                      color: "#f59e0b",
                      fontWeight: "semibold",
                      "&:hover": {
                        borderColor: "transparent",
                        backgroundColor: "#f6ae31",
                        color: "#fff",
                      },
                    }}
                  >
                    {" "}
                    <a href={service.path}>Purchase</a>
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
