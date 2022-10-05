import { memo, useMemo } from "react";
import { IRscNavItem, RscLogo } from "../../design-system";
import { RscNavbar } from "../../design-system";
import { rscRoutes } from "../../shared";
import "./RscHeader.scss";

const routeToNavItems = () => {
  const items: IRscNavItem[] = [];

  for (const [key, value] of Object.entries(rscRoutes)) {
    const item: IRscNavItem = {
      itemKey: value.key,
      name: value.name,
      url: value.url,
      items: value.items,
    };
    items.push(item);
  }
  return items;
};

const RscHeader: React.FC = () => {
  const navItems = useMemo(() => routeToNavItems(), []);
  return (
    <header className="rsc-header">
      <div className="logo-container">
        <RscLogo />
      </div>
      <RscNavbar items={navItems} active="home" />
    </header>
  );
};

export default memo(RscHeader);
