import React from "react";
import { NativeBaseProvider } from "native-base";
import CustomHeader from "./components/header";
import HomeScreen from "./screens/home";

const App = () => {
  return (
    <NativeBaseProvider>
      <CustomHeader title="Info E-Cher" />
      <HomeScreen />
    </NativeBaseProvider>
  );
};

export default App;