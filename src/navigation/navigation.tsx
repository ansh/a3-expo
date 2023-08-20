import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeTabParamList,
  ProfileTabParamList,
  RootStackParamList,
  TabStackParamList,
} from "./types";
import Home, { HomeHeaderRight } from "../screens/home/Home";
import Profile, { ProfileHeaderRight } from "../screens/profile/Profile";
import Settings from "../screens/settings/Settings";
import { useColorScheme } from "../config/styles/colorScheme";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabsStack = createBottomTabNavigator<TabStackParamList>();
const HomeTabStack = createNativeStackNavigator<HomeTabParamList>();
const ProfileTabStack = createNativeStackNavigator<ProfileTabParamList>();

const Navigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigation />
    </NavigationContainer>
  );
};

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Tabs" component={TabNavgiation} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

const TabNavgiation = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabsStack.Screen
        name="HomeTab"
        component={HomeTabNavigation}
        options={{ tabBarLabel: "Home" }}
      />
      <TabsStack.Screen
        name="ProfileTab"
        component={ProfileTabNavigation}
        options={{ tabBarLabel: "Profile" }}
      />
    </TabsStack.Navigator>
  );
};

const HomeTabNavigation = () => {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: (props) => <HomeHeaderRight {...props} />,
          headerLargeTitle: true,
        }}
      />
    </HomeTabStack.Navigator>
  );
};

const ProfileTabNavigation = () => {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: (props) => <ProfileHeaderRight {...props} />,
          headerLargeTitle: true,
        }}
      />
      <ProfileTabStack.Screen name="Settings" component={Settings} />
    </ProfileTabStack.Navigator>
  );
};

export default Navigation;