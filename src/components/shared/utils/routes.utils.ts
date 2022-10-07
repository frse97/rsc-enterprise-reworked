import { IRscNavItem } from "../../design-system";
import { rscRoutes } from "../model";

/**
 * A method to convert routes to navigation items
 * @returns
 */
export const routeToNavItems = () => {
  const items: IRscNavItem[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
