import * as Google from "expo-auth-session/providers/google";

import { Text, PressableOpacity } from "../../components/base";
import { createUseStyles } from "../../config/styles/createUseStyles";

export const SignInWithGoogleButton = () => {
  const { styles } = useStyles();

  return (
    <PressableOpacity style={styles.container}>
      <Text style={styles.text}>Sign in with Google</Text>
    </PressableOpacity>
  );
};

const useStyles = createUseStyles(({ palette }) => ({
  container: {
    backgroundColor: palette.red.red10,
    borderRadius: 8,
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
}));
