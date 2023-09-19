import * as AppleAuthentication from "expo-apple-authentication";
import { OAuthProvider, User, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

import { firebaseAuth } from "../../config/firebaseConfig";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  signInWithApple: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: (user: User | null) => {},
  signInWithApple: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(
      firebaseAuth,
      (firebaseUser) => {
        console.log("@onAuthStateChanged: begin");
        setUser(firebaseUser);
      },
      (error) => {
        console.error("@onAuthStateChanged: Error ", error);
      },
      () => {
        console.log("@onAuthStateChanged: completed");
      }
    );
  }, []);

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const accessToken = credential.authorizationCode;
      const idToken = credential.identityToken;

      if (!accessToken || !idToken) {
        throw new Error("Missing access token or id token");
      }

      const provider = new OAuthProvider("apple.com");
      const firebaseCredential = provider.credential({
        idToken,
        accessToken,
      });

      await signInWithCredential(firebaseAuth, firebaseCredential);

      // TODO: fix type of e
    } catch (e: any) {
      Alert.alert("Error", e.message); // TODO: replace with toast
    }
  }

  const signOut = async () => {
    await firebaseAuth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signInWithApple,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
