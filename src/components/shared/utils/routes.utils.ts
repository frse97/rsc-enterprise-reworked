import { IRscNavItem } from "../../design-system";
import { RouteKey, rscRoutes } from "../model";
import { Location } from "react-router-dom";

/**
 * A method to convert routes to navigation items
 * @returns
 */
export const routeToNavItems = () => {
  const items: IRscNavItem[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(rscRoutes)) {
    const item: IRscNavItem = {
      itemKey: value.itemKey,
      name: value.name,
      url: value.url,
      items: value.items,
    };
    items.push(item);
  }
  return items;
};

/**
 * A method to extract the last route path
 */
export const extractLastPath = (location: Location): RouteKey => {
  // If the splittet length is bigger then one we can assume we are not on the home route
  const paths = location.pathname.split("/");

  // TODO: Refactor as soon as route changes to published version (length > 1)
  if (paths.length > 2) {
    return paths.pop() as RouteKey;
  } else {
    return "home";
  }
};
