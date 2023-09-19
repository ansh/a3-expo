import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

import { Text } from "../../components/base";
import { ProfileTabParamList } from "../../navigation/types";

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
