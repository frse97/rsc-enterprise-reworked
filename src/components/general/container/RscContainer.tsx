import { CSSProperties, memo, ReactNode } from "react";
import { CommonProps } from "../models";
import cs from "classnames";
import "./RscContainer.scss";

type RscContainerType = "div" | "section";

interface IRscContainer extends CommonProps {
  /**
   * The type of container
   */
  type: RscContainerType;
  /**
   * If the container is a flex container
   * @default true
   */
  flex?: boolean;
  /**
   * The direction of the content (only active if flex is set)
   */
  direction?: "horizontal" | "vertical";
  /**
   * The way to align content center (only active if flex is set)
   */
  alignCenter?: boolean;
  /**
   * The way to justify content center (only active if flex is set)
   */
  justifyContentCenter?: boolean;
}

const generateContainer = (
  content: ReactNode,
  type: RscContainerType,
  className?: string,
  style?: CSSProperties
) => {
  if (type === "div") {
    return (
      <div className={className} style={style}>
        {content}
      </div>
    );
  } else if (type === "section") {
    return (
      <section className={className} style={style}>
        {content}
      </section>
    );
  }
};

const RscContainer: React.FC<IRscContainer> = (props) => {
  const {
    className,
    content,
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

  return <>{generateContainer(content, type, classNames, style)}</>;
};

export default memo(RscContainer);
