import { Pressable, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeTabParamList } from "../../navigation/types";
import { createUseStyles } from "../../config/styles/createUseStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useToggleColorScheme, useWithColorScheme } from "../../config/styles/colorScheme";
import { Text } from "../../components/base";

type Props = NativeStackScreenProps<HomeTabParamList, "Home">;
const Home = ({}: Props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
export default Home;

export const HomeHeaderRight = (props: {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  labelVisible?: boolean;
}) => {
  const { styles, palette } = useStyles();
  const toggleColorScheme = useToggleColorScheme();
  const iconName = useWithColorScheme("moon-sharp", "sunny-sharp");

  return (
    <View>
      <Pressable
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        onPress={() => {
          toggleColorScheme();
        }}
      >
        <Ionicons
          name={iconName}
          size={24}
          color={palette.icon}
          style={[styles.headerRightIcon, { opacity: props.pressOpacity }]}
        />
      </Pressable>
    </View>
  );
};

const useStyles = createUseStyles(() => ({
  headerRightIcon: {
    marginRight: 10,
  },
}));
