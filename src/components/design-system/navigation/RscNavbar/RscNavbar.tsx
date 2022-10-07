import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { IRscNavbar, IRscNavItem } from "./RscNavbar.types";
import cs from "classnames";
import "./RscNavbar.scss";

/**
 * A component to display a single navigation item
 */
const RscNavItem: React.FC<IRscNavItem> = (props) => {
  const { name, url, itemKey, activeRoute, setActiveRoute, items } = props;

  console.log("ITEM", itemKey, activeRoute);

  const className = cs("rsc-nav-item", {
    "is-active": activeRoute === itemKey,
  });

  const handleOnClick = useCallback(() => {
    if (setActiveRoute) {
      setActiveRoute(itemKey);
    }
  }, [itemKey, setActiveRoute]);

  return (
    <div className={className} onClick={handleOnClick}>
      <Link to={url}>{name}</Link>
    </div>
  );
};

/**
 * A component to display the navigation navbar
 */
const RscNavbar: React.FC<IRscNavbar> = (props) => {
  const { items, activeRoute, setActiveRoute } = props;

  return (
    <div className="rsc-navigation">
      {items?.map((item) => {
        return (
          <RscNavItem
            itemKey={item.itemKey}
            name={item.name}
            url={item.url}
            items={item.items}
            activeRoute={activeRoute}
            setActiveRoute={setActiveRoute}
          />
        );
      })}
    </div>
  );
};

export default memo(RscNavbar);
