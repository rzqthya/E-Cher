import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              title: "Message",
              headerTitleAlign: "left",
              headerTitleStyle: { color: "#F82F2D" }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
};

export default App;