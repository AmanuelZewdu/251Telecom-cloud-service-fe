import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Common } from "./Common";

export const MarketingHero = () => {
  const navigate = useNavigate();
  return (
    <Common>
      <img className="h-32 w-32" src="biro.png" alt="Biro251 logo" />
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-3xl">
            <span className="font-extrabold text-animation">Biro 251</span>{" "}
            <span className="text-gray-500">•</span> Comprehensive Storage
            Solution
          </h1>
          <p className="text-xl font-light">
            Securely store all your files, photos, and videos in one place.
          </p>
        </div>
        <Button
          onClick={() => navigate("/biro251")}
          disableRipple
          variant="outlined"
          sx={{ borderRadius: 20 }}
          endIcon={<ArrowForward />}
        >
          Order now
        </Button>
      </div>
    </Common>
  );
};
