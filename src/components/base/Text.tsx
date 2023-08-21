import { Text as DefaultText } from "react-native";
import { createUseStyles } from "../../config/styles/createUseStyles";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { palette } = useStyles();

  return <DefaultText style={[{ color: palette.text }, style]} {...otherProps} />;
}

const useStyles = createUseStyles(({ palette }) => ({}));
