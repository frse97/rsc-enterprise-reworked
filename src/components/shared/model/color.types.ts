export interface IRscColors {
  light: {
    primaryColor1: string;
    primaryColor2: string;
    primaryColor3: string;
    primaryColor4: string;
    primaryColor5: string;
    primaryColor6: string;
    primaryColor7: string;
    callToAction: string;
    callToActionActive: string;
    callToActionHover: string;
    lightBackground: string;
    darkBackground: string;
  };
  dark: {
    primaryColor1: string;
    primaryColor2: string;
    primaryColor3: string;
    primaryColor4: string;
    primaryColor5: string;
    primaryColor6: string;
    primaryColor7: string;
    callToAction: string;
    callToActionActive: string;
    callToActionHover: string;
    lightBackground: string;
    darkBackground: string;
  };
}

/**
 * The type of colors based on the rsc theme
 */
export const colors: IRscColors = {
  // The colors for the light theme
  light: {
    primaryColor1: "#0015ff",
    primaryColor2: "#4b647b",
    primaryColor3: "#d9e5f2",
    primaryColor4: "#1b415c",
    primaryColor5: "#76899e",
    primaryColor6: "#06003c",
    primaryColor7: "#00dbce",
    callToAction: "#ff8c00",
    callToActionActive: "rgba(255, 140, 0, 0.9)",
    callToActionHover: "rgba(255, 140, 0, 0.4)",
    lightBackground: "#fcfcfc",
    darkBackground: "#191919",
  },
  // The colors for the dark theme
  dark: {
    primaryColor1: "#0015ff",
    primaryColor2: "#4b647b",
    primaryColor3: "#d9e5f2",
    primaryColor4: "#1b415c",
    primaryColor5: "#76899e",
    primaryColor6: "#06003c",
    primaryColor7: "#00dbce",
    callToAction: "#ff8c00",
    callToActionActive: "rgba(255, 140, 0, 0.9)",
    callToActionHover: "rgba(255, 140, 0, 0.4)",
    lightBackground: "#fcfcfc",
    darkBackground: "#191919",
  },
};
