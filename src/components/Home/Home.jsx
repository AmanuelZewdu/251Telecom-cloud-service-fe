import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import "./home.scss";

const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center gap-8 ">
      <Hero />
      <Services />
    </div>
  );
};
export default Home;
