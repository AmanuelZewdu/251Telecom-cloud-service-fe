import "./services.scss";
import { services } from "../../shared/data/data.js";
import { Button } from "@mui/material";
const Services = () => {
  return (
    <div>
      <div className="flex flex-col text-center p-2">
        <h1 className="">Our services</h1>
        <div className="w-full p-3 flex flex-wrap gap-8">
          {services.map((service) => (
            <div
              className="border border-gray-400 rounded-lg flex flex-col items-center p-2 max-w-[20em]"
              key={service.id}
            >
              <div className="w-[10em]">
                <img src={service.image} alt="service" />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl">{service.serviceName}</h2>
                <div className="font-light">{service.description}</div>
                <div>
                  <Button variant="outlined">Purchase</Button>
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
