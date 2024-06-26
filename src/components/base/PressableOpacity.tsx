import { Pressable as DefaultPressable, StyleProp, ViewStyle, PressableProps } from "react-native";

import { isAndroid } from "../../lib/platform";

interface Props extends PressableProps {
  style?: StyleProp<ViewStyle>;
  touchOpacity?: number;
}

export const PressableOpacity: React.FC<Props> = ({
  style,
  android_ripple = { color: "lightgrey" },
  touchOpacity = 0.5,
  children,
  ...otherProps
}) => {
  return (
    <DefaultPressable
      style={({ pressed }) => [style, { opacity: !isAndroid && pressed ? touchOpacity : 1 }]}
      android_ripple={android_ripple}
      {...otherProps}
    >
      {children}
    </DefaultPressable>
  );
};
