import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeTabParamList, RootStackParamList, TabStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<HomeTabParamList, "Home">;
const Home = ({}: Props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  headerRightIcon: {
    marginRight: 10,
  },
});
