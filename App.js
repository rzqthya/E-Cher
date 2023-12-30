import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from "./screens/home";
import DetailVoucher from "./screens/detailvoucher";
// import filter from "./screens/filter";
import Filter from "./screens/filter";
import History from "./screens/history";
import FormScreen from "./screens/form";
import DetailScreen from "./screens/DetailScreen";
import InfoScreen from "./screens/info";
import ContentScreen from "./screens/ContentScreen";
import FaqScreen from "./screens/FaqScreen";
import ChatScreen from "./screens/ChatScreen";
import Profile from "./screens/profile";
import EditProfile from "./screens/edit-profile";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();


const noHead = { headerShown: true };
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
          headerTitleStyle: { color: "#D32324" },
        }}
      />
      <TabBottom.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "Info",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#D32324" },

        }}
      />
      <TabBottom.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#D32324" },
        }}
      />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen
              name="Detail Voucher"
              component={DetailVoucher}
              options={{
                ...noHead,
                title: "Detail Voucher",
                headerTitleStyle: {
                  color: "#D32324",
                },
                headerTintColor: "#D32324",
              }} />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{
                ...noHead,
                title: "Filter",
                headerTitleStyle: {
                  color: "#D32324",
                },
                headerTintColor: "#D32324",
              }} />
            <Stack.Screen
              name="edit-profile"
              component={EditProfile}
              options={{
                title: "Edit Profile",
                headerTitleAlign: "center",
                headerTitleStyle: { color: "#F82F2D" },
                headerTintColor: "#D32324",
              }}
            />
            <Stack.Screen name="Form" component={FormScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="ContentScreen"
              component={ContentScreen}
              options={{
                title: "Tentang Kami",
                headerTitleAlign: "center",
                headerTitleStyle: { color: "#F82F2D" },
                headerTintColor: "#D32324",
              }}
            />
            <Stack.Screen
              name="FaqScreen"
              component={FaqScreen}
              options={{
                title: "FAQ",
                headerTitleAlign: "center",
                headerTitleStyle: { color: "#F82F2D" },
                headerTintColor: "#D32324",
              }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{
                title: "Message",
                headerTitleAlign: "left",
                headerTitleStyle: { color: "#F82F2D" },
                headerTintColor: "#D32324",
              }}
            />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};


export default App;
