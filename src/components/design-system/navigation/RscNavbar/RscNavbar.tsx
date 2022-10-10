import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IRscNavbar, IRscNavItem } from "./RscNavbar.types";
import cs from "classnames";
import "./RscNavbar.scss";

/**
 * A component to display a single navigation item
 */
const RscNavItem: React.FC<IRscNavItem> = (props) => {
  const {
    name,
    url,
    itemKey,
    activeRoute,
    setActiveRoute,
    items,
    open,
    setOpen,
  } = props;

  const className = cs("rsc-nav-item", {
    "is-active": activeRoute === itemKey,
  });
  const arrowClassName = cs("rsc-arrow-down", {
    "is-open": open,
  });
  const childrenClassName = cs("rsc-nav-items-children", {
    "is-open": open,
  });

  const handleOnClick = useCallback(() => {
    if (setOpen) {
      setOpen(false);
    }
    if (setActiveRoute) {
      setActiveRoute(itemKey);
    }
  }, [itemKey, setActiveRoute, setOpen]);

  const handleOnOpen = useCallback(() => {
    if (setOpen) {
      setOpen(!open);
    }
  }, [open, setOpen]);

  return (
    <div className="rsc-nav-item-container">
      <div className={className}>
        <Link onClick={handleOnClick} to={url}>
          {name}
        </Link>
        {items && (
          <div className={arrowClassName} onClick={handleOnOpen}>
            ⮟
          </div>
        )}
      </div>
      {items && (
        <div className={childrenClassName}>
          {items?.map((item) => {
            const childrenClassName = cs("rsc-nav-item", {
              "is-active": activeRoute === item.itemKey,
            });

            return (
              <div className={childrenClassName}>
                <Link onClick={handleOnClick} to={item.url}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/**
 * A component to display the navigation navbar
 */
const RscNavbar: React.FC<IRscNavbar> = (props) => {
  const { items, activeRoute, setActiveRoute } = props;

  const [open, setOpen] = useState(false);

  console.log("NAV ITEMS", items);

  return (
    <div className="rsc-navigation">
      {items?.map((item) => {
        return (
          <RscNavItem
            key={item.itemKey}
            itemKey={item.itemKey}
            name={item.name}
            url={item.url}
            items={item.items}
            activeRoute={activeRoute}
            setActiveRoute={setActiveRoute}
            open={open}
            setOpen={setOpen}
          />
        );
      })}
    </div>
  );
};

export default memo(RscNavbar);
