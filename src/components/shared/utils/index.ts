import { extractLastPath, routeToNavItems } from "./routes.utils";
import { marginToClassName, paddingToClassName } from "./spacing.utils";

export const utils = {
  routing: {
    routeToNavItems,
    extractLastPath,
  },
  spacing: {
    marginToClassName,
    paddingToClassName,
  },
};
