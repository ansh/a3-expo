import { StyleSheet, Text, View, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileTabParamList } from "../../navigation/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = NativeStackScreenProps<ProfileTabParamList, "Profile">;
const Profile = ({}: Props) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
export default Profile;

export const ProfileHeaderRight = (props: {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  labelVisible?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp<ProfileTabParamList>>();
  return (
    <View>
      <Pressable
        style={{ opacity: props.pressOpacity }}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Ionicons name="settings" size={24} color="black" style={[styles.headerRightIcon]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightIcon: {
    marginRight: 10,
  },
});
