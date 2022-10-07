import { RscMargin, RscPadding } from "../model";

/**
 * A method to convert margins in classnames
 */
export const marginToClassName = (margin: RscMargin) => {
  let className = "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(margin)) {
    console.log("key value", key, typeof key, value, typeof value);

    if (key === "top") {
      className = className.concat(`.mt-${value} `);
    }
    if (key === "left") {
      className = className.concat(`.ml-${value}`);
    }
    if (key === "right") {
      className = className.concat(`.mr-${value}`);
    }
    if (key === "bottom") {
      className = className.concat(`.mb-${value}`);
    }
  }
  return className;
};

/**
 * A method to convert paddings in classnames
 */
export const paddingToClassName = (padding: RscPadding) => {
  let className = "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(padding)) {
    console.log("key value", key, typeof key, value, typeof value);

    if (key === padding.top) {
      className = className.concat(`.pt-${value} `);
    }
    if (key === padding.left) {
      className = className.concat(`.pl-${value}`);
    }
    if (key === padding.right) {
      className = className.concat(`.pr-${value}`);
    }
    if (key === padding.bottom) {
      className = className.concat(`.pb-${value}`);
    }
  }
  return className;
};
