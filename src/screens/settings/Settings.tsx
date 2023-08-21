import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileTabParamList } from "../../navigation/types";
import { Text } from "../../components/base";

type Props = NativeStackScreenProps<ProfileTabParamList, "Settings">;
const Settings = ({}: Props) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
