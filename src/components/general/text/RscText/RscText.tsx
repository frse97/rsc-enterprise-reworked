import { CSSProperties, memo, ReactNode } from "react";
import { IRscText, TextTypes } from "./RscText.types";
import "./RscText.scss";

const generateTextComponent = (
  type: TextTypes,
  content: ReactNode,
  styles: CSSProperties,
  className?: string
): ReactNode => {
  if (type === "h1") {
    return (
      <h1 className={className} style={styles}>
        {content}
      </h1>
    );
  } else if (type === "h2") {
    return (
      <h2 className={className} style={styles}>
        {content}
      </h2>
    );
  } else if (type === "h3") {
    return (
      <h3 className={className} style={styles}>
        {content}
      </h3>
    );
  } else if (type === "h4") {
    return (
      <h4 className={className} style={styles}>
        {content}
      </h4>
    );
  } else if (type === "h5") {
    return (
      <h5 className={className} style={styles}>
        {content}
      </h5>
    );
  } else if (type === "h6") {
    return (
      <h6 className={className} style={styles}>
        {content}
      </h6>
    );
  } else if (type === "span") {
    return (
      <span className={className} style={styles}>
        {content}
      </span>
    );
  } else if (type === "paragraph") {
    return (
      <p className={className} style={styles}>
        {content}
      </p>
    );
  }
};

const RscText: React.FC<IRscText> = (props) => {
  const {
    className,
    content,
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    type,
    style,
  } = props;

  const styles: CSSProperties = {
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    ...style,
  };

  return <>{generateTextComponent(type, content, styles, className)}</>;
};

export default memo(RscText);
