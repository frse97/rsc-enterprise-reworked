import { memo } from "react";
import cs from "classnames";
import "./RscSteps.scss";
import { RscFlowingLine } from "../line";

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
}

interface IRscSteps {
  /**
   * The steps to display
   */
  steps: IRscStep[];
}

export const RscStep: React.FC<IRscStep> = (props) => {
  const {
    title,
    description,
    image,
    orientation,
    horLineDirection,
    verLineDirection,
    isVerticalLineDisplayed = true,
  } = props;

  const className = cs(
    "step",
    orientation === "left" ? "step-left" : "step-right"
  );

  return (
    <div className={className}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>

      <div className="step-img">{image}</div>
      <RscFlowingLine direction={horLineDirection} />
      {isVerticalLineDisplayed && (
        <RscFlowingLine direction={horLineDirection} mode={verLineDirection} />
      )}
    </div>
  );
};

const RscSteps: React.FC<IRscSteps> = (props) => {
  const { steps } = props;

  return (
    <div className="rsc-steps-container">
      {steps.map((step) => {
        return <RscStep {...step} />;
      })}
    </div>
  );
};

export default memo(RscSteps);
