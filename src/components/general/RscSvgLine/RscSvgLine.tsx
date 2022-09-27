import { memo } from "react";
import cs from "classnames";
import "./RscSvgLine.scss";

interface IRscSvgLine {
  /**
   * A className to pass to the line component
   */
  className?: string;
}

const RscSvgLine: React.FC<IRscSvgLine> = (props) => {
  const { className } = props;
  const classNames = cs("line", className);

  return (
    <>
      <svg className={classNames}>
        <path></path>
      </svg>
      <svg className={classNames}>
        <path></path>
      </svg>
    </>
  );
};

export default memo(RscSvgLine);
