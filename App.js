import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Info from "./screens/info";
import Profile from "./screens/profile";
import Home from "./screens/home";
import History from "./screens/history";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

const noHead = { headerShown: false };

const BottomTabs = () => {
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
              iconName = "document-text-outline";
              break;
            case "Info":
              iconName = "videocam-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
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
      <TabBottom.Screen name="Home" component={Home} options={noHead} />
      <TabBottom.Screen name="History" component={History} options={{ headerTitle: "Voucherku" }} />
      <TabBottom.Screen name="Info" component={Info} options={noHead} />
      <TabBottom.Screen name="Profile" component={Profile} options={noHead} />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTabs} options={noHead}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;