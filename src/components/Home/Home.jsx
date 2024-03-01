import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import "./home.scss";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Services />
    </div>
  );
};
export default Home;
