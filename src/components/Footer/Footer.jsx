import logo from "../../shared/images/cloud251Logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
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
    <div className="w-full grid grid-cols-1 place-items-center lg:grid-cols-3 gap-4 bg-gradient-to-br from-primary-blue to-secondary-blue text-white pb-8">
      <div className="max-w-[5em]">
        <img src={logo} alt="" />
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li>Virtual machine</li>
          <li>Object storage</li>
          <li>Array storage</li>
        </ul>
      </div>
      <div>
        <h3>Location information</h3>
        <ul className="flex">
          {contactInfo.map((info) => (
            <li className="reflect" key={info.id}>
              {info.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
