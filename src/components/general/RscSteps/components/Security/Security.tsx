import { memo } from "react";
import { SecurityIcon } from "../../../../icons";
import "./Security.scss";

const SecurityStep: React.FC = () => {
  return (
    <div className="fifth-step">
      <div className="security">
        <h1 className="title">Security</h1>
        <p className="description">
          The safety of your data and assets is an essential part of the
          solution we developed together. RSC will provide the best
          cybersecurity solutions for you and your blockchain related products.
        </p>
      </div>
      <div className="security-img">
        <SecurityIcon />
      </div>
    </div>
  );
};

export default memo(SecurityStep);
