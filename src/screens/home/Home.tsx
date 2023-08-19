import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TabStackParamList } from "../../navigation/types";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = NativeStackScreenProps<TabStackParamList, "Home">;
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
  return (
    <View>
      <Ionicons name="settings" size={24} color="black" style={styles.headerRightIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightIcon: {
    marginRight: 10,
  },
});
