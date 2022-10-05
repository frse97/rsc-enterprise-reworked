/**
 * The spacing definition in the RSC Design System
 */
export interface IRscTokenSpacing {
  readonly xs: number;
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly xxl: number;
  readonly xxxl: number;
  readonly xxxxl: number;
}

export interface RscSpacing {
  top: IRscTokenSpacing;
  left: IRscTokenSpacing;
  right: IRscTokenSpacing;
  bottom: IRscTokenSpacing;
}
