// colors.ts

// radix-ui colors imported from https://www.radix-ui.com/colors
import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from "@radix-ui/colors";
const defaultGradient = ["#FDEA61", "#FD7C67", "#FA48FB", "#0DD9EA", "#73FC73"];

const sharedColors = {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  defaultGradient,
};

export default {
  light: {
    text: "#000",
    icon: "#000",
    lightText: "#333",
    background: "#fff",
    activeText: "#fff",
    transparent: "rgba(255,255,255,0)",
    ...sharedColors,
  },
  dark: {
    text: "#fff",
    icon: "#fff",
    lightText: "#aaa",
    background: "#000",
    activeText: "#9D9D9D",
    transparent: "rgba(0,0,0,0)",
    ...sharedColors,
  },
};
