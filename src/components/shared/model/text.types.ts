import { CommonProps } from "./generic.types";

/**
 * Font sizes
 */
type FontSize =
  | "8px"
  | "12px"
  | "14px"
  | "16px"
  | "20px"
  | "24px"
  | "32px"
  | "48px"
  | "64px";
/**
 * Font styles
 */
type FontStyle = "normal" | "italic";
/**
 * Font weight types
 */
type FontWeight =
  | "bold"
  | "bolder"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
/**
 * Text transform types
 */
type TextTransform = "capitalize" | "uppercase" | "lowercase";

/**
 * Common text properties
 */
export interface CommonText extends CommonProps {
  /**
   * The font weight
   */
  fontWeight?: FontWeight;
  /**
   * The font size
   */
  fontSize?: FontSize;
  /**
   * The font style
   */
  fontStyle?: FontStyle;
  /**
   * The transformation of the text
   */
  textTransform?: TextTransform;
}
