import { CSSProperties } from "react";
import { IRscText, IRscTitle } from "./RscText.types";
import cs from "classnames";
import "./RscText.scss";
import { generateTextComponent, generateTitleComponent } from "./RscText.utils";

export const RscTitle: React.FC<IRscTitle> = (props) => {
  const {
    className,
    children,
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    level,
    style,
  } = props;

  const classNames = cs("rsc-title", className, {});

  const styles: CSSProperties = {
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    ...style,
  };

  return <>{generateTitleComponent(level, children, styles, classNames)}</>;
};

export const RscText: React.FC<IRscText> = (props) => {
  const {
    className,
    children,
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    type,
    style,
  } = props;

  const classNames = cs("rsc-text", className, {});

  const styles: CSSProperties = {
    fontSize,
    fontStyle,
    fontWeight,
    textTransform,
    ...style,
  };

  return <>{generateTextComponent(type, children, styles, classNames)}</>;
};
