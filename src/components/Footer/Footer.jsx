import { Link } from "react-router-dom";
import logo from "../../shared/images/cloud251Logo.webp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const services = [
    {
      id: 0,
      serviceName: <Link to="/virtual-machine"></Link>,
    },
    {
      id: 1,
      serviceName: <Link to="/virtual-machine">Virtual machine</Link>,
    },
    {
      id: 2,
      serviceName: <Link to="/virtual-machine">Object storage</Link>,
    },
    {
      id: 3,
      serviceName: <Link to="/virtual-machine">Array storage</Link>,
    },
  ];

  const contactInfo = [
    {
      id: 0,
      icon: <LocalPhoneIcon />,
    },
    {
      id: 1,
      icon: <EmailIcon />,
    },
    {
      id: 2,
      icon: <TelegramIcon />,
    },
    {
      id: 3,
      icon: <InstagramIcon />,
    },
  ];

  return (
    <div className="bg-gray-200 font-Inter text-primary-blue">
      <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 max-w-7xl mx-auto p-4 py-10 mb-6 xl:mb-0 xl:p-12">
        <div className="col-span-2 justify-items-start flex gap-2">
          <div className="max-w-[5em]">
            <img src={logo} alt="cloud251 logo" />
          </div>
          <p className="">
            Elevating your digital journey with our cloud expertise. Welcome to
            Cloud251, your trusted cloud partner
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="flex flex-col underline justify-center gap-1">
            {services.map((service) => (
              <li key={service.id}>{service.serviceName}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Usefull links</h3>
          <ul className="flex flex-col underline justify-center gap-1 w-[10em]">
            <li>terms and conditions</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="-mt-1 col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-medium">Contact information</h3>
          <ul className="flex gap-6">
            {contactInfo.map((info) => (
              <li
                className="reflect hover:scale-125 transition-all duration-300 ease-in-out"
                key={info.id}
              >
                {info.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center w-full relative bottom-2 text-xs">
        <span>@2024, Copyright; cloud251.com</span> @2024, Copyright;
        cloud251.com
      </p>
    </div>
  );
};
export default Footer;
