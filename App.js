import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import InfoScreen from "./screens/info";
import HistoryScreen from "./screens/history";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import ContentScreen from "./screens/ContentScreen";
import FaqScreen from "./screens/FaqScreen";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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
              color={focused ? "#D32324" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#D32324" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#F82F2D" },
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "Info",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#F82F2D" },

        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#F82F2D" },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="ContentScreen"
            component={ContentScreen}
            options={{
              title: "Tentang Kami",
              headerTitleAlign: "center",
              headerTitleStyle: { color: "#F82F2D" },
            }}
          />
          <Stack.Screen
            name="FaqScreen"
            component={FaqScreen}
            options={{
              title: "FAQ",
              headerTitleAlign: "center",
              headerTitleStyle: { color: "#F82F2D" },
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>

  );
};

export default App;
