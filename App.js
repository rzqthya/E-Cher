import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from "./screens/home";
import History from "./screens/history";
import Info from "./screens/info"
import Profile from "./screens/profile";
import EditProfile from "./screens/edit-profile";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabBottom.Navigator
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
      <TabBottom.Screen
        name="Home"
        component={Home} // "Home" diambil dari fungsi component dari file home.js
        options={{ headerShown: false }}
      />
      <TabBottom.Screen
        name="History"
        component={History}// "History" diambil dari fungsi component dari history.js
        options={{
          title: "History", 
          headerTitleAlign: "center", 
          headerTitleStyle: { color: "#F82F2D" },
        }}
      />
      <TabBottom.Screen
        name="Info"
        component={Info}
        options={{
          title: "Info",  
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#F82F2D" },
           
        }}
      />
      <TabBottom.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile", 
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#F82F2D" }, 
        }}
      />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login"> 
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
          {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
          <Stack.Screen
            name="edit-profile"
            component={EditProfile}
            options={{
              title: "Edit Profile",
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
