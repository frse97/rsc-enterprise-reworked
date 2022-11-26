import { CommonText } from "../../../shared";

/**
 * The types of text
 */
export type TextTypes = "span" | "paragraph";

/**
 * The levels of title
 */
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * The properties of the `RscText` component
 */
export interface IRscText extends CommonText {
  /**
   * The type of text to render
   */
  type: TextTypes;
}

/**
 * The properties of the `RscTitle` component
 */
export interface IRscTitle extends CommonText {
  /**
   * The level of the title
   */
  level: TitleLevel;
  /**
   * Flags to remove margin
   */
  noMargin?:
    | boolean
    | {
        top?: boolean;
        bottom?: boolean;
      };
}
