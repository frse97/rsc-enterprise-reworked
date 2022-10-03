import { CSSProperties, memo } from "react";
import cs from "classnames";
import { IRscText, RscText } from "../RscText";
import "./RscLinearGradientText.scss";

/**
 * The properties of the `RscLinearGradientText` component
 */
interface IRscLinearGradientText extends IRscText {
  /**
   * The angle of the gradient color (0-360)
   */
  angle: number;
  /**
   * The first grade color
   */
  color1: string;
  /**
   * The second grade color
   */
  color2: string;
  /**
   * The opacity of the grade color (0-100)
   */
  opacity: number;
}

const RscLinearGradientText: React.FC<IRscLinearGradientText> = (props) => {
  const { color1, color2, opacity, angle, className, style, ...textProps } =
    props;

  const classNames = cs("rsc-linear-gradient", className);

  const styles: CSSProperties & {
    "--colorGradient1": string;
    "--colorGradient2": string;
    "--opacityGradient": string;
    "--angleGradient": string;
  } = {
    "--colorGradient1": color1,
    "--colorGradient2": color2,
    "--opacityGradient": `${opacity}%`,
    "--angleGradient": `${angle}deg`,
    ...style,
  };

  return <RscText className={classNames} style={styles} {...textProps} />;
};

export default memo(RscLinearGradientText);
