import {
  LocalPoliceTwoTone,
  Shield,
  ShieldMoonTwoTone,
  ShieldTwoTone,
} from "@mui/icons-material";
import { Common } from "./Common";

export const MarketingHero2 = () => {
  return (
    <Common>
      <div className="flex gap-4 items-center">
        <div className="text-4xl text-green-500 bg-green-500/20 rounded-full p-2 flex justify-center items-center">
          <LocalPoliceTwoTone fontSize="large" />
        </div>
        <div className="space-y-1 pl-2">
          <h1 className="text-3xl">A comprehensive storage solution</h1>
          <p className="text-xl font-light">
            Securely store all your files, photos, and videos in one place.
          </p>
        </div>
      </div>
    </Common>
  );
};
