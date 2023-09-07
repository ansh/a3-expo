import { Appearance, ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

type TypedColorScheme = NonNullable<ColorSchemeName>;

export function useColorScheme(): TypedColorScheme {
  return _useColorScheme() as TypedColorScheme;
}

export function setColorScheme(colorScheme: ColorSchemeName) {
  Appearance.setColorScheme(colorScheme);
}

export function useToggleColorScheme() {
  const colorScheme = useColorScheme();

  function toggle() {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  }

  return toggle;
}

export function useWithColorScheme<T>(light: T, dark: T): T {
  const colorScheme = useColorScheme();

  return colorScheme === "dark" ? dark : light;
}
