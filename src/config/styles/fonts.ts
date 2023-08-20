const size = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
} as const;

const weight = {
  full: "900",
  semi: "600",
  bold: "bold",
  normal: "normal",
  thin: "400",
  light: "300",
} as const;

const variants = {
  default: "sf-pro-text",
  bold: "sf-pro-semi-bold-text",
  medium: "manrope-medium",
  manropeBold: "manrope-bold",
} as const;

export default {
  size,
  weight,
  variants,
};
