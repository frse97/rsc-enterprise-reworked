export interface IRscStep {
  /**
   * The title of the step
   */
  title: string;
  /**
   * The description of the step
   */
  description: string;
  /**
   * The image of the step
   */
  image?: JSX.Element;
  /**
   * The orientation of the step
   * @default 'left'
   */
  orientation?: "left" | "right";
  /**
   * Horizontal line orientation
   */
  horLineDirection?: "left" | "right";
  /**
   * Vertical line orientation
   */
  verLineDirection?: "verticalLeft" | "verticalRight";
  /**
   * Flag to identify if the vertical line should be displayed
   * @default true
   */
  isVerticalLineDisplayed?: boolean;
  /**
   * Flag to identify if the horizontal line should be displayed
   * @default true
   */
  isHorizontalLineDisplayed?: boolean;
}

export interface IRscSteps {
  /**
   * The steps to display
   */
  steps: IRscStep[];
}
