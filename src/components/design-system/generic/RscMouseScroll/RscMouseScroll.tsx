import { memo } from "react";
import "./RscMouseScroll.scss";

interface IRscMouseScroll {
  /**
   * A label to put aside of the scrolling mouse
   */
  label?: JSX.Element;
}

const RscMouseScroll: React.FC<IRscMouseScroll> = (props) => {
  const { label } = props;

  return (
    <div className="mouse-scroll-container">
      <div className="mouse">
        <div className="dot" />
      </div>
      <div className="mouse-label">{label}</div>
    </div>
  );
};

export default memo(RscMouseScroll);
