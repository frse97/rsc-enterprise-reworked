import { ReactNode } from "react";
import { IRscColors, RscMargin, RscPadding } from "../../../shared";

/**
 * The native button type
 */
type RscNativeButtonType = "button" | "submit" | "reset";
/**
 * The sizes of buttons
 */
type RscButtonSize = "sm" | "md" | "lg" | "xl";

/**
 * The properties of the `RscButton` component
 */
export interface IRscButton {
  /**
   * The className of the button
   */
  className?: string;
  /**
   * The label of the button
   */
  label?: ReactNode;
  /**
   * The icon of the button
   */
  icon?: ReactNode;
  /**
   * The native type of the button
   * @default 'button'
   */
  nativeType?: RscNativeButtonType;
  /**
   * The primary color of the button
   */
  color?: string | IRscColors;
  /**
   * The size of the button
   * @default 'md'
   */
  size?: RscButtonSize;
  /**
   * Identifier if the button should have strong label
   * @default 'true'
   */
  strong?: boolean;
  /**
   * The link to which the button connects
   */
  href?: string;
  /**
   * The method which the button calls
   */
  onClick?: () => void;
  /**
   * An identifier if the color should fill the background
   * @default true
   */
  isFilled?: boolean;
  /**
   * The margin of the button
   */
  margin?: RscMargin;
  /**
   * The padding of the button
   */
  padding?: RscPadding;
}
