import { CSSProperties, memo, ReactNode, useMemo } from "react";
import cs from "classnames";
import "./RscButton.scss";
import { Link } from "react-router-dom";
import { transformColorToHex } from "./RscButton.utils";

/**
 * The types of buttons
 */
type RscButtonType = "primary" | "default";
/**
 * The native button type
 */
type RscNativeButtonType = "button" | "submit" | "reset";
/**
 * The sizes of buttons
 */
type RscButtonSize = "sm" | "md" | "lg" | "xl";
/**
 * The type of colors for the button (used in primary)
 */
export type RscColors =
  | "mainBlue"
  | "grayBlue"
  | "lightBlue"
  | "darkBlue"
  | "acquaMarineBlue"
  | "default";

/**
 * The properties of the `RscButton` component
 */
interface IRscButton {
  /**
   * The className of the button
   */
  className?: string;
  /**
   * The label of the button
   */
  label?: ReactNode;
  /**
   * The icon of the button
   */
  icon?: ReactNode;
  /**
   * The native type of the button
   * @default 'button'
   */
  nativeType?: RscNativeButtonType;
  /**
   * The primary color of the button
   */
  color?: RscColors;
  /**
   * The size of the button
   * @default 'md'
   */
  size?: RscButtonSize;
  /**
   * Identifier if the button should have strong label
   * @default 'true'
   */
  strong?: boolean;
  /**
   * The link to which the button connects
   */
  href?: string;
  /**
   * The method which the button calls
   */
  onClick?: () => void;
  /**
   * An identifier if the color should fill the background
   * @default true
   */
  isFilled?: boolean;
}

const RscButton: React.FC<IRscButton> = (props) => {
  const {
    className,
    label,
    icon,
    color = "mainBlue",
    nativeType = "button",
    isFilled = true,
    size = "md",
    strong = true,
    href,
    onClick,
  } = props;

  const classNames = cs(
    "rsc-button",
    className,
    isFilled ? "is-filled" : "is-not-filled",
    {
      "is-small": size === "sm",
      "is-middle": size === "md",
      "is-large": size === "lg",
      "is-extralarge": size === "xl",
      "is-strong": strong,
    }
  );

  const mergedStyles: CSSProperties & { "--rsc-primary-btn-color"?: string } = {
    "--rsc-primary-btn-color": `${transformColorToHex(color)}`,
  };

  console.log("ICON", icon);

  const buttonContent: JSX.Element = useMemo(() => {
    return (
      <>
        {icon && <div className="rsc-btn-icon">{icon}</div>}
        {label}
      </>
    );
  }, [icon, label]);

  return onClick ? (
    <button className={classNames} type={nativeType} style={mergedStyles}>
      {buttonContent}
    </button>
  ) : (
    <Link className="rsc-button-anchor" to={href || ""}>
      <button className={classNames} type={nativeType} style={mergedStyles}>
        {buttonContent}
      </button>
    </Link>
  );
};

export default memo(RscButton);
