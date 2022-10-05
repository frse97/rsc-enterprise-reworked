import { CSSProperties, ReactNode } from "react";
import { TextTypes, TitleLevel } from "./RscText.types";

export const generateTitleComponent = (
  level: TitleLevel,
  content: ReactNode,
  styles: CSSProperties,
  className?: string
): ReactNode => {
  if (level === 1) {
    return (
      <h1 className={className} style={styles}>
        {content}
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2 className={className} style={styles}>
        {content}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3 className={className} style={styles}>
        {content}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4 className={className} style={styles}>
        {content}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5 className={className} style={styles}>
        {content}
      </h5>
    );
  } else if (level === 6) {
    return (
      <h6 className={className} style={styles}>
        {content}
      </h6>
    );
  }
};

export const generateTextComponent = (
  type: TextTypes,
  content: ReactNode,
  styles: CSSProperties,
  className?: string
): ReactNode => {
  if (type === "span") {
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
