import { RouteKeys } from "../../../shared";

/**
 * The properties for a single `RscNavItem` component
 */
export interface IRscNavItem {
  /**
   * The key of the item
   */
  itemKey: RouteKeys;
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
  active?: RouteKeys;
  /**
   * The children of the item (max 2 levels)
   */
  items?: IRscNavItem[];
  /**
   * A method to change routing
   */
  setActive?: React.Dispatch<React.SetStateAction<RouteKeys>>;
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
   * The active item of the navbar
   */
  active: RouteKeys;
}
