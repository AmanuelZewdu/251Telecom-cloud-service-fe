import "./contactUs.scss";

const ContactUs = () => {
  return (
    <div className="flex w-full place-content-center font-montserrat">
      <div className="contactUs w-full flex flex-col place-items-center place-content-end min-h-[19em] p-8 text-center gap-4">
        <h1 className="text-4xl text-primary-blue font-semibold">
          Contact <span className="relative text-button-color line">us</span>
        </h1>
        <span className="text-primary-blue text-lg max-w-[40em]">
          How can we help? Your feedback is invaluable to us. Please don't
          hesitate to reach out with any questions, comments, or concerns..
        </span>
      </div>
    </div>
  );
};
export default ContactUs;
