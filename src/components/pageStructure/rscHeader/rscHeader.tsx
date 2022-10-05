import { memo } from "react";
import { Link } from "react-router-dom";
import { IRscNavItem, RscLogo } from "../../design-system";
import { RscNavbar } from "../../design-system";
import { rscRoutes } from "../../shared";
import "./RscHeader.scss";

const routeToNavItems = () => {
  const items: IRscNavItem[] = [];

  for (const [key, value] of Object.entries(rscRoutes)) {
    console.log("obj", key, value);
  }
};

const RscHeader: React.FC = () => {
  routeToNavItems();

  return (
    <header className="rsc-header">
      <div className="logo-container">
        <RscLogo />
      </div>
      {/* <RscNavbar items={} /> */}
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
