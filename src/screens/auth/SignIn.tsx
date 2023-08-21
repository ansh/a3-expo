import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList, HomeTabParamList } from "../../navigation/types";
import { createUseStyles } from "../../config/styles/createUseStyles";
import { Text } from "../../components/base";

type Props = NativeStackScreenProps<AuthStackParamList, "SignIn">;
const SignIn = ({}: Props) => {
  const { styles } = useStyles();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Sign in</Text>
    </ScrollView>
  );
};
export default SignIn;

const useStyles = createUseStyles(({ palette }) => ({
  text: {
    color: palette.text,
  },
}));
