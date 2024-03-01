import "./services.scss";
import { services } from "../../shared/data/data.js";
import { Button } from "@mui/material";
const Services = () => {
  return (
    <div>
      <div className="flex flex-col  text-center p-2 gap-6">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl">Our services</h1>
          <p className="font-light">Here are service we are offering </p>
        </div>
        <div className="w-full p-3 flex items-center justify-center flex-wrap gap-8">
          {services.map((service) => (
            <a
              href={service.path}
              key={service.id}
              className="border border-gray-200 rounded-lg flex flex-col items-center justify-between p-2 max-w-[20em] 
              transition-shadow duration-300 ease-in-out
              shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
              "
            >
              <div className="w-[10em]">
                <img
                  src={service.image}
                  alt="service"
                  className="transition-all duration-300 ease-in-out hover:scale-125 mix-blend-color-burn"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl">{service.serviceName}</h2>
                <div className="font-light">{service.description}</div>
                <div>
                  <Button variant="outlined" className="w-full hover:border ">
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
