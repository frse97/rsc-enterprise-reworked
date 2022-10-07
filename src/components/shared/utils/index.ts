import { transformColorToHex } from "./colors.utils";
import { routeToNavItems } from "./routes.utils";
import { marginToClassName, paddingToClassName } from "./spacing.utils";

export const utils = {
  colors: {
    transformColorToHex,
  },
  routing: {
    routeToNavItems,
  },
  spacing: {
    marginToClassName,
    paddingToClassName,
  },
};
