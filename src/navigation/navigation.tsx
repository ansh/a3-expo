import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabStackParamList } from "./types";
import Home, { HomeHeaderRight } from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import Settings from "../screens/settings/Settings";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabsStack = createBottomTabNavigator<TabStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Tabs" component={TabNavgiation} />
      <RootStack.Screen name="Settings" component={Settings} />
    </RootStack.Navigator>
  );
};

const TabNavgiation = () => {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: HomeHeaderRight,
        }}
      />
      <TabsStack.Screen name="Profile" component={Profile} />
    </TabsStack.Navigator>
  );
};

export default Navigation;
