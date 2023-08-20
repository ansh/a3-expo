import { StyleSheet, Text, View, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileTabParamList } from "../../navigation/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUseStyles } from "../../config/styles/createUseStyles";

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
  const { styles, palette } = useStyles();
  return (
    <View>
      <Pressable
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Ionicons
          name="settings"
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
