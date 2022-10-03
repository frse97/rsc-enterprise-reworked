import { CSSProperties } from "react";
import { CommonText } from "../../models/text.types";

/**
 * The types of text
 */
export type TextTypes =
  | "span"
  | "paragraph"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

/**
 * The properties of the `RscLinearGradientText` component
 */
export interface IRscText extends CommonText {
  /**
   * The type of text to render
   */
  type: TextTypes;
  /**
   * Styles passed to the component
   */
  style?: CSSProperties;
}
