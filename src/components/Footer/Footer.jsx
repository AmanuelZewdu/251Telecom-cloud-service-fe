import { Link } from "react-router-dom";
import logo from "../../shared/images/cloud251Logo.png";
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
    <div className="w-full grid grid-cols-2 items-start place-items-center lg:grid-cols-4 gap-4 xl:gap-6 bg-gradient-to-br from-button-color via-primary-blue to-secondary-blue text-white pt-12 pb-2 px-2 font-poppins">
      <div className="col-span-2 lg:col-span-1 flex gap-2 max-w-[33em] items-center">
        <div className="max-w-[5em]">
          <img src={logo} alt="" />
        </div>
        <p className="font-light">
          Elevating your digital journey with our cloud expertise. Welcome to
          Cloud251, your trusted cloud partner
        </p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg font-medium">Services</h3>
        <ul className="flex flex-col justify-center gap-1 font-light">
          {services.map((service) => (
            <li key={service.id}>{service.serviceName}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-medium">Usefull links</h3>
        <ul className="flex flex-col gap-1 font-light">
          <li>terms and conditions</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 col-span-2 lg:col-span-1 ">
        <h3 className="text-lg font-medium">Location information</h3>
        <ul className="flex gap-8">
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
      <p className="col-span-full text-center text-sm font-light mt-6">
        @2024, Copyright; cloud251.com
      </p>
    </div>
  );
};
export default Footer;
