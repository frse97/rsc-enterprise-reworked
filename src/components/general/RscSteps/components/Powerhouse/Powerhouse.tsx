import { memo } from "react";
import { PowerHouseIcon } from "../../../../icons";
import { RscSvgLine } from "../../../RscSvgLine";
import "./Powerhouse.scss";

const PowerhouseStep: React.FC = () => {
  return (
    <div className="first-step">
      <div className="powerhouse">
        <h1 className="title">Powerhouse</h1>
        <p className="description">
          The blockchain technology has a wide variety of possible applications.
          We will guide you through them to find the one that best fits your
          needs.
        </p>
      </div>

      <div className="powerhouse-img">
        <PowerHouseIcon />
      </div>
      <RscSvgLine className="powerhouse-line1" />

      {/* <div className="powerhouse-line" /> */}
      <div className="powerhouse-line2" />
    </div>
  );
};

export default memo(PowerhouseStep);
