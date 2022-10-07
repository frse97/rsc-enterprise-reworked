import { RouteKey } from "../../shared";

/**
 * The properties of the `RscHeader` component
 */
export interface IRscHeader {
  /**
   * The active route of the application
   */
  activeRoute: RouteKey;
  /**
   * A method to change the active route
   */
  setActiveRoute: React.Dispatch<React.SetStateAction<RouteKey>>;
}
