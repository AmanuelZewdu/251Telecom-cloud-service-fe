import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import Faq from "../FAQ/Faq";
import "./home.scss";
import ContactUsSection from "../ContactUsSection/ContactUsSection";

const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center">
      <Hero />
      <Services />
      <Faq />
      <ContactUsSection />
    </div>
  );
};
export default Home;
