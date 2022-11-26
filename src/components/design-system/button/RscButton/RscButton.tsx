import { CSSProperties, memo, useMemo } from "react";
import cs from "classnames";
import "./RscButton.scss";
import { Link } from "react-router-dom";
import { utils } from "../../../shared";
import { IRscButton } from "./RscButton.types";

const RscButton: React.FC<IRscButton> = (props) => {
  const {
    className,
    disabled,
    label,
    icon,
    color = "mainBlue",
    nativeType = "button",
    isFilled = true,
    size = "md",
    strong = true,
    href,
    onClick,
    margin,
    padding,
  } = props;

  const marginClassNames = useMemo(
    // TODO: Initialize default values
    () => utils.spacing.marginToClassName(margin || {}),
    [margin]
  );
  // TODO: Initiallize default values
  const paddingClassNames = useMemo(
    () => utils.spacing.paddingToClassName(padding || {}),
    [padding]
  );

  const classNames = cs(
    "rsc-button",
    className,
    isFilled ? "is-filled" : "is-not-filled",
    marginClassNames,
    paddingClassNames,
    {
      "is-small": size === "sm",
      "is-middle": size === "md",
      "is-large": size === "lg",
      "is-extralarge": size === "xl",
      "is-strong": strong,
      "has-no-label": icon && !label,
    }
  );

  const mergedStyles: CSSProperties & { "--rsc-primary-btn-color"?: string } = {
    "--rsc-primary-btn-color": color as string,
  };

  const buttonContent: JSX.Element = useMemo(() => {
    return (
      <>
        {icon && <div className="rsc-btn-icon">{icon}</div>}
        {label}
      </>
    );
  }, [icon, label]);

  return href ? (
    <Link className="rsc-button-anchor" to={href || ""}>
      <button
        className={classNames}
        disabled={disabled}
        type={nativeType}
        style={mergedStyles}
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      className={classNames}
      disabled={disabled}
      type={nativeType}
      style={mergedStyles}
    >
      {buttonContent}
    </button>
  );
};

export default memo(RscButton);
