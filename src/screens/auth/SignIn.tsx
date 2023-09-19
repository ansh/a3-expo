import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";

import { createUseStyles } from "../../config/styles/createUseStyles";
import { SignInWithAppleButton } from "../../lib/auth/apple";
import { SignInWithGoogleButton } from "../../lib/auth/google";
import { AuthStackParamList, HomeTabParamList } from "../../navigation/types";

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
