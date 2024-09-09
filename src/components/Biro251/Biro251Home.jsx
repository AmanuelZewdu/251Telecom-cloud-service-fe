import { Biro251Layout } from "./Biro251Layout";
import { Cards } from "./Cards/Cards";
import { Features } from "./Features/Features";
import { Hero } from "./Hero";
import { MarketingHero2 } from "./MarketingHero/MarketingHero2";
import { Pricing } from "./Pricing/Pricing";

export const Biro251Home = () => {
  return (
    <Biro251Layout>
      <div className="space-y-2 sm:space-y-16">
        <Hero />
        <MarketingHero2 />
        <Cards />
        <Features />
        <Pricing />
      </div>
    </Biro251Layout>
  );
};
