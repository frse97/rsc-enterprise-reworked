import { memo } from "react";
import { RscSteps } from "../general/RscSteps";
import "./Home.scss";

const RscHome: React.FC = () => {
  return (
    <div className="rsc-home">
      <div className="intro">
        <div className="rsc-title">
          <span>
            Tailor-made Web3 solution <br /> for businesses and brands
          </span>
        </div>
      </div>
      <div className="info-area">
        <div className="scroll-container">
          <div className="mouse">
            <div className="dot" />
          </div>
          Scroll down to see <br /> how we do it
        </div>
      </div>
      <RscSteps />
    </div>
  );
};

export default memo(RscHome);
