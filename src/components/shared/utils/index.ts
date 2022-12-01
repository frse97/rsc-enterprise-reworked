import { getSitemapEntries, getSocialConnection } from "./data.utils";
import { extractLastPath, routeToNavItems } from "./routes.utils";
import { marginToClassName, paddingToClassName } from "./spacing.utils";

export const utils = {
  data: {
    getSitemapEntries,
    getSocialConnection,
  },
  routing: {
    routeToNavItems,
    extractLastPath,
  },
  spacing: {
    marginToClassName,
    paddingToClassName,
  },
};
