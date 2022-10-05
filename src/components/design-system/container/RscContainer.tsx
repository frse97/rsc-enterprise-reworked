import { memo } from "react";
import cs from "classnames";
import "./RscContainer.scss";
import { IRscContainer } from "./RscContainer.types";
import { generateContainer } from "./RscContainer.utils";

const RscContainer: React.FC<IRscContainer> = (props) => {
  const {
    className,
    children,
    type,
    flex,
    direction,
    alignCenter,
    justifyContentCenter,
    style,
  } = props;

  const classNames = cs(
    "rsc-container",
    className,
    direction === "horizontal" ? "flex-h" : "flex-v",
    {
      "is-flex": flex,
      "is-aligned-center": alignCenter,
      "is-justified-center": justifyContentCenter,
    }
  );

  return <>{generateContainer(children, type, classNames, style)}</>;
};

export default memo(RscContainer);
