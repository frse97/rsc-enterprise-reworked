import { CSSProperties, ReactNode } from "react";
import { RscContainerType } from "./RscContainer.types";

export const generateContainer = (
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
