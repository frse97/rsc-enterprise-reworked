import { memo } from "react";
import cs from "classnames";
import "./RscSteps.scss";
import { RscFlowingLine } from "../../line";
import { IRscStep, IRscSteps } from "./RscSteps.types";

export const RscStep: React.FC<IRscStep> = (props) => {
  const {
    title,
    description,
    image,
    orientation,
    horLineDirection,
    verLineDirection,
    isVerticalLineDisplayed = true,
    isHorizontalLineDisplayed = true,
  } = props;

  const className = cs(
    "step",
    orientation === "left" ? "step-left" : "step-right"
  );

  return (
    <div className={className}>
      <div className="container">
        <h1 className="title" aria-details={title}>
          {title}
        </h1>
        <p className="description">{description}</p>
      </div>

      <div className="step-img">{image}</div>
      {isHorizontalLineDisplayed && (
        <RscFlowingLine direction={horLineDirection} />
      )}
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
