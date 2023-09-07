import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList, HomeTabParamList } from "../../navigation/types";
import { createUseStyles } from "../../config/styles/createUseStyles";
import { SignInWithAppleButton } from "../../lib/auth/apple";
import { SignInWithGoogleButton } from "../../lib/auth/google";

type Props = NativeStackScreenProps<AuthStackParamList, "SignIn">;
const SignIn = ({}: Props) => {
  const { styles } = useStyles();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SignInWithAppleButton />
      <SignInWithGoogleButton />
    </ScrollView>
  );
};
export default SignIn;

const useStyles = createUseStyles(({ palette }) => ({
  text: {
    color: palette.text,
  },
}));
