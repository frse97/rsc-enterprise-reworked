import { RscColors } from "./RscButton";

export const transformColorToHex = (color: RscColors) => {
  if (color === "mainBlue") {
    return "#0015ff";
  } else if (color === "grayBlue") {
    return "#4b647b";
  } else if (color === "lightBlue") {
    return "#d9e5f2";
  } else if (color === "darkBlue") {
    return "#06003c";
  } else if (color === "acquaMarineBlue") {
    return "#00dbce";
  }
};
