import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "./useColorScheme";
import colors from "./colors";
import fonts from "./fonts";
import layout from "./layout";

type Palette = (typeof colors)["light"];

type GetStylesPayload = {
  palette: Palette;
  layout: typeof layout;
  colors: typeof colors;
  fonts: typeof fonts;
  edgeInsets: EdgeInsets;
};

export function createUseStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  getStyles: (payload: GetStylesPayload) => T | StyleSheet.NamedStyles<T>
): () => GetStylesPayload & { styles: T } {
  return () => {
    const theme = useColorScheme();
    const edgeInsets = useSafeAreaInsets();
    const palette = colors[theme];

    const styles = useMemo(
      () => StyleSheet.create(getStyles({ palette, layout, colors, fonts, edgeInsets })),
      [theme]
    );

    return { styles, palette, layout, colors, edgeInsets, fonts };
  };
}
