import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Info from "./screens/info";
import Profile from "./screens/profile";
import Home from "./screens/home";
import History from "./screens/history";
import DetailVoucher from "./screens/detailvoucher";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

const noHead = { headerShown: true };

const BottomTabs = () => {
  return (
    <TabBottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "History":
              iconName = "time";
              break;
            case "Info":
              iconName = "information-circle";
              break;
            case "Profile":
              iconName = "person-circle";
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
      <TabBottom.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <TabBottom.Screen name="History" component={History}
        options={{
          title: "History",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#D32324" },
        }} />
      <TabBottom.Screen name="Info" component={Info}
        options={{
          title: "Info",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#D32324" },
        }} />
      <TabBottom.Screen name="Profile" component={Profile} options={{
        title: "Profile",
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#D32324" },
      }} />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="Detail Voucher"
            component={DetailVoucher}
            options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;