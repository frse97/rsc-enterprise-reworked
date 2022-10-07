/**
 * The spacing definition in the RSC Design System
 */
export type IRscTokenSpacing =
  | "none"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export interface RscSpacing {
  top?: IRscTokenSpacing;
  left?: IRscTokenSpacing;
  right?: IRscTokenSpacing;
  bottom?: IRscTokenSpacing;
}

export type RscMargin = RscSpacing;
export type RscPadding = RscSpacing;
