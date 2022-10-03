import { memo } from "react";
import cs from "classnames";
import "./RscFlowingLine.scss";

/**
 * The properties for the flowing line
 */
interface IRscFlowingLine {
  /**
   * The direction of the flowing line
   * @default 'left'
   */
  direction?: "left" | "right";
  /**
   * The mode of the flowing line
   * @default 'horizontal'
   */
  mode?: "horizontal" | "verticalLeft" | "verticalRight";
}

const RscFlowingLine: React.FC<IRscFlowingLine> = (props) => {
  const { direction = "left", mode = "horizontal" } = props;

  const classNames = cs(
    "rsc-flowing-line",
    direction === "left" ? "flowing-left" : "flowing-right",
    {
      "flowing-horizontal": mode === "horizontal",
      "flowing-vertical": mode === "verticalLeft" || mode === "verticalRight",
      "v-left": mode === "verticalLeft",
      "v-right": mode === "verticalRight",
    }
  );

  return (
    <div className={classNames}>
      {mode === "horizontal" && (
        <>
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
        </>
      )}
      {(mode === "verticalLeft" || mode === "verticalRight") && (
        <>
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
          <div className="rsc-line" />
        </>
      )}
    </div>
  );
};

export default memo(RscFlowingLine);
