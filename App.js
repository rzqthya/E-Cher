import React from "react";
import { NativeBaseProvider } from "native-base";
import CustomHeader from "./components/header";
import ContentScreen from "./screens/ContentScreen";

const App = () => {
  return (
    <NativeBaseProvider>
      <CustomHeader title="CARA KLAIM VOUCHER" />
      <ContentScreen />
    </NativeBaseProvider>
  );
};

export default App;