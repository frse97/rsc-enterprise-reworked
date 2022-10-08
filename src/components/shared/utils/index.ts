import { transformColorToHex } from "./colors.utils";
import { extractLastPath, routeToNavItems } from "./routes.utils";
import { marginToClassName, paddingToClassName } from "./spacing.utils";

export const utils = {
  colors: {
    transformColorToHex,
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
