import { RscColors } from "../model";

export const transformColorToHex = (color: string | RscColors) => {
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
  } else if (color === "callToAction") {
    return "#ff8c00";
  } else {
    return color;
  }
};
