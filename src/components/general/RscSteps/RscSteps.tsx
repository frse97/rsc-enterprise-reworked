import { memo } from "react";
import cs from "classnames";
import "./RscSteps.scss";

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
}

interface IRscSteps {
  /**
   * The steps to display
   */
  steps: IRscStep[];
}

export const RscStep: React.FC<IRscStep> = (props) => {
  const { title, description, image, orientation } = props;

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
