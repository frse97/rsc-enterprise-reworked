import { CommonProps } from "../../../shared";

export type RscContainerType = "div" | "section";

export interface IRscContainer extends CommonProps {
  /**
   * The type of container
   */
  type: RscContainerType;
  /**
   * If the container is a flex container
   * @default true
   */
  flex?: boolean;
  /**
   * Identifier if the flex container should grow
   */
  flexGrow?: boolean;
  /**
   * The direction of the content (only active if flex is set)
   */
  direction?: "horizontal" | "vertical";
  /**
   * The way to align content center (only active if flex is set)
   */
  alignCenter?: boolean;
  /**
   * The way to justify content center (only active if flex is set)
   */
  justifyContentCenter?: boolean;
}
