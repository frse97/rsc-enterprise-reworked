import { memo } from "react";
import { DesignIcon } from "../../../../icons";
import "./Design.scss";

const DesignStep: React.FC = () => {
  return (
    <div className="second-step">
      <div className="design-img">
        <DesignIcon />
      </div>
      <div className="design">
        <h1 className="title">Design</h1>
        <p className="description">
          We spot and design the most suitable and profitable blockchain
          solutions for you, your business and your stakeholders.
        </p>
      </div>
      <div className="design-line" />
      <div className="dot1" />
      <div className="design-line2" />
    </div>
  );
};

export default memo(DesignStep);
