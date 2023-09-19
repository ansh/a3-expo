import * as AppleAuthentication from "expo-apple-authentication";
import { Platform } from "react-native";

import { useAuth } from "./AuthProvider";
import { useWithColorScheme } from "../../config/styles/colorScheme";
import { isIOS } from "../platform";

export async function useCheckIsAppleAuthAvailable() {
  const isAvailable = await AppleAuthentication.isAvailableAsync();
  if (isIOS && isAvailable) {
    return true;
  }
  return false;
}

export const SignInWithAppleButton = () => {
  const isAvailable = useCheckIsAppleAuthAvailable();
  const { signInWithApple } = useAuth();
  const buttonStyle = useWithColorScheme(
    AppleAuthentication.AppleAuthenticationButtonStyle.BLACK,
    AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
  );

  if (!isAvailable) {
    return null;
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={buttonStyle}
      onPress={signInWithApple}
      style={{ width: 200, height: 44 }}
      cornerRadius={6}
    />
  );
};
