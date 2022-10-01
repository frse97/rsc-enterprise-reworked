import { memo } from "react";
import cs from "classnames";
import "./RscSvgLine.scss";

interface IRscSvgLine {
  /**
   * A className to pass to the line component
   */
  className?: string;
  /**
   * The position of the svg line, since it's positioned absolutely
   */
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  /**
   * The width of the line
   */
  width?: number;
}

const RscSvgLine: React.FC<IRscSvgLine> = (props) => {
  const { className, position, width } = props;
  const classNames = cs("line", className);

  return (
    <>
      <svg
        className={classNames}
        style={{
          top: position?.top,
          left: position?.left,
          right: position?.right,
          bottom: position?.bottom,
          width,
        }}
      >
        <path></path>
      </svg>
      <svg className={classNames}>
        <path></path>
      </svg>
    </>
  );
};

export default memo(RscSvgLine);
