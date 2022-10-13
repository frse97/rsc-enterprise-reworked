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
    flexGrow,
    direction,
    alignCenter,
    justifyContentCenter,
    style,
  } = props;

  const classNames = cs("rsc-container", className, {
    "is-flex": flex,
    "flex-grow": flexGrow,
    "flex-h": direction === "horizontal",
    "flex-v": direction === "vertical",
    "is-aligned-center": alignCenter,
    "is-justified-center": justifyContentCenter,
  });

  return <>{generateContainer(children, type, classNames, style)}</>;
};

export default memo(RscContainer);
