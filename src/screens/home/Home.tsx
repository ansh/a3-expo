import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, View } from "react-native";

import { Text } from "../../components/base";
import { useToggleColorScheme, useWithColorScheme } from "../../config/styles/colorScheme";
import { createUseStyles } from "../../config/styles/createUseStyles";
import { HomeTabParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<HomeTabParamList, "Home">;
const Home = ({}: Props) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Home</Text>
    </ScrollView>
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
