import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IRscNavbar, IRscNavItem } from "./RscNavbar.types";
import cs from "classnames";
import "./RscNavbar.scss";
import { RouteKeys } from "../../../shared";

const RscNavItem: React.FC<IRscNavItem> = (props) => {
  const { name, url, itemKey, active, setActive, items } = props;

  console.log("ITEM", itemKey, active);

  const className = cs("rsc-nav-item", {
    "is-active": active === itemKey,
  });

  const handleOnClick = useCallback(() => {
    if (setActive) {
      setActive(itemKey);
    }
  }, [itemKey, setActive]);

  return (
    <div className={className} onClick={handleOnClick}>
      <Link to={url}>{name}</Link>
    </div>
  );
};

const RscNavbar: React.FC<IRscNavbar> = (props) => {
  const { items, active } = props;
  console.log("ITEMS", items);

  const [activeItem, setActiveItem] = useState<RouteKeys>(active);

  return (
    <div className="rsc-navigation">
      {items?.map((item) => {
        return (
          <RscNavItem
            itemKey={item.itemKey}
            name={item.name}
            url={item.url}
            items={item.items}
            active={activeItem}
            setActive={setActiveItem}
          />
        );
      })}
    </div>
  );
};

export default memo(RscNavbar);
