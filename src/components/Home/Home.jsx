import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import Faq from "../FAQ/Faq";
import "./home.scss";

const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center gap-8 ">
      <Hero />
      <Services />
      <Faq />
    </div>
  );
};
export default Home;
