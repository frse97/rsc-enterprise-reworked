/**
 * The properties for a single `RscNavItem` component
 */
export interface IRscNavItem {
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
  active?: boolean;
  /**
   * The children of the item (max 2 levels)
   */
  items?: IRscNavItem[];
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
  active: boolean;
}
