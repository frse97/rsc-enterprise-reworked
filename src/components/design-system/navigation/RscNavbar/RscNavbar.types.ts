import { RouteKey } from "../../../shared";

/**
 * The properties for a single `RscNavItem` component
 */
export interface IRscNavItem {
  /**
   * The key of the item
   */
  itemKey: RouteKey;
  /**
   * The url of the item
   */
  url: string;
  /**
   * The name of the item
   */
  name: string;
  /**
   * Identifier if the item is active
   */
  activeRoute?: RouteKey;
  /**
   * The children of the item (max 2 levels)
   */
  items?: IRscNavItem[];
  /**
   * A method to change routing
   */
  setActiveRoute?: React.Dispatch<React.SetStateAction<RouteKey>>;
  /**
   * Identifier if there are any open items
   */
  openChildren?: boolean;
  /**
   * A method to open/close subitems
   */
  setOpenChildren?: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Identifier if the mobile navigation is open
   */
  openMobileNav?: boolean;
  /**
   * A method to open/close mobile nav
   */
  setOpenMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * The properties for the `RscNavbar` component
 */
export interface IRscNavbar {
  /**
   * The navigation items to display
   */
  items: IRscNavItem[];
  /**
   * The active route
   */
  activeRoute: RouteKey;
  /**
   * A method to change the active route
   */
  setActiveRoute: React.Dispatch<React.SetStateAction<RouteKey>>;
}
