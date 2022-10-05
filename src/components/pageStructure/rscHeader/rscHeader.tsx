import { memo } from "react";
import { Link } from "react-router-dom";
import { RscLogo } from "../../general";
import { rscRoutes } from "../../shared";
import "./RscHeader.scss";

const RscHeader: React.FC = () => {
  return (
    <header className="rsc-header">
      <div className="logo-container">
        <RscLogo />
      </div>
      <div className="navigation">
        <Link to={rscRoutes.aboutUs.url}>
          <button>WHO WE ARE</button>
        </Link>
        <Link to={rscRoutes.services.url}>
          <button>SERVICES</button>
        </Link>
        <Link to={rscRoutes.contactUs.url}>
          <button>CONTACT</button>
        </Link>
      </div>
    </header>
  );
};

export default memo(RscHeader);
