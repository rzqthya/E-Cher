import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import ContentScreen from "./screens/ContentScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ContentScreen"
            component={ContentScreen}
            options={{
              title: "FAQ",
              headerTitleAlign: "center",
              headerTitleStyle: { color: "#F82F2D" }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
};

export default App;