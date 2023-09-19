import Constants, { ExecutionEnvironment } from "expo-constants";
import { Platform } from "react-native";

// device platform
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isNative = isIOS || isAndroid;
export const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient; // use this to check if the app is running in Expo Go, and add fallbacks for features that aren't available in Expo Go.
