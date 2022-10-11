import { memo, useMemo } from "react";
import { RscLogo } from "../../design-system";
import { RscNavbar } from "../../design-system";
import cs from "classnames";
import { utils } from "../../shared";
import "./RscHeader.scss";
import { IRscHeader } from "./RscHeader.types";

/**
 * A component to display the header
 */
const RscHeader: React.FC<IRscHeader> = (props) => {
  const { activeRoute, setActiveRoute } = props;

  const navItems = useMemo(() => utils.routing.routeToNavItems(), []);

  const classNames = cs("rsc-header", {
    "is-not-on-home": activeRoute !== "home",
  });

  return (
    <header className={classNames}>
      <div className="logo-container">
        <RscLogo />
      </div>
      <RscNavbar
        items={navItems}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      />
    </header>
  );
};

export default memo(RscHeader);
