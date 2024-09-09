import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import Faq from "../FAQ/Faq";
import "./home.scss";
import ContactUsSection from "../ContactUsSection/ContactUsSection";
import OurPlatform from "../OurPlatform/OurPlatform";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurPartners from "../OurPartners/OurPartners";
import SecurityCompliance from "../SecurityCompliance/SecurityCompliance";
import { MarketingHero } from "../Biro251/MarketingHero/MarketingHero";
const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center">
      <Hero />
      <Services />
      <OurPlatform />
      <WhyChooseUs />
      <SecurityCompliance />
      <OurPartners />
      <MarketingHero />
      <Faq />
      <ContactUsSection />
    </div>
  );
};
export default Home;
