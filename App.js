import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHeader from "./components/header";
import InfoScreen from "./screens/info";
import HistoryScreen from "./screens/history.js";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "History":
              iconName = "time-outline";
              break;
            case "Info":
              iconName = "information-circle-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={noHead} />
      <Tab.Screen name="History" component={HistoryScreen} options={noHead} />
      <Tab.Screen name="Info" component={InfoScreen} options={noHead} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <CustomHeader title="Info E-Cher" />
        <Tabs />
      </NativeBaseProvider>
    </NavigationContainer>

  );
};

export default App;
