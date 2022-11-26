import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IRscNavbar, IRscNavItem } from "./RscNavbar.types";
import cs from "classnames";
import disableScroll from "disable-scroll";
import "./RscNavbar.scss";

/**
 * A component to display a single navigation item
 * FIXME: Arrow non available on Apple
 */
const RscNavItem: React.FC<IRscNavItem> = (props) => {
  const {
    name,
    url,
    itemKey,
    activeRoute,
    setActiveRoute,
    items,
    openChildren,
    setOpenChildren,
    openMobileNav,
    setOpenMobileNav,
  } = props;

  const className = cs("rsc-nav-item", {
    "is-active": activeRoute === itemKey,
  });
  const arrowClassName = cs("rsc-arrow-down", {
    "is-open": openChildren,
  });
  const childrenClassName = cs("rsc-nav-items-children", {
    "is-open": openChildren,
  });

  const handleOnClick = useCallback(() => {
    if (setOpenChildren) {
      setOpenChildren(false);
    }

    if (openMobileNav && setOpenMobileNav) {
      setOpenMobileNav(false);
      disableScroll.off();
    }
    if (setActiveRoute) {
      setActiveRoute(itemKey);
    }
  }, [
    itemKey,
    setActiveRoute,
    setOpenChildren,
    openMobileNav,
    setOpenMobileNav,
  ]);

  const handleOnOpen = useCallback(() => {
    if (setOpenChildren) {
      setOpenChildren(!openChildren);
    }
  }, [openChildren, setOpenChildren]);

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
            const childrenClassName = cs("rsc-nav-child", {
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

  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openChildren, setOpenChildren] = useState(false);

  const mobileClassName = cs("rsc-mobile-navigation", {
    "is-expanded": openMobileNav,
  });
  const mobileContainerClassName = cs("rsc-mobile-navigation-container", {
    "is-open": openMobileNav,
  });

  const handleOnMobileClick = useCallback(() => {
    setOpenMobileNav(!openMobileNav);
    openMobileNav ? disableScroll.off() : disableScroll.on();
  }, [openMobileNav]);

  return (
    <>
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
              openChildren={openChildren}
              setOpenChildren={setOpenChildren}
            />
          );
        })}
      </div>
      {/* Mobile Navigation */}
      <div className={mobileClassName} onClick={handleOnMobileClick}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div className={mobileContainerClassName}>
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
              openChildren={openChildren}
              setOpenChildren={setOpenChildren}
              openMobileNav={openMobileNav}
              setOpenMobileNav={setOpenMobileNav}
            />
          );
        })}
      </div>
    </>
  );
};

export default memo(RscNavbar);
