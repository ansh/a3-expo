import { Text as DefaultText } from "react-native";
import { createUseStyles } from "../../config/styles/createUseStyles";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { styles } = useStyles();

  return <DefaultText style={[styles.text, style]} {...otherProps} />;
}

const useStyles = createUseStyles(({ palette }) => ({
  text: {
    color: palette.text,
  },
}));
